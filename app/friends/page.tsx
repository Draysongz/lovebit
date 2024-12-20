'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/uishad/card'
import { InviteDialog } from './invite-dialog'
import { BottomNav } from '@/components/button-nav'

export default function InvitePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [lpAmount, setLpAmount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-image flex flex-col">
      <Card className="flex-grow flex flex-col bg-gradient-image">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#020aa1] via-[#fff] to-[#020aa1] bg-clip-text text-transparent">
            INVITE FRIENDS
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center border-4 w-11/12 py-12 px-12">
              <h2 className="text-5xl font-bold text-white mb-4">{lpAmount} LP</h2>
              <Button 
                className="border border-[#020aa1] bg-gradient-to-r from-[#020aa1] via-[#fff] to-[#020aa1] bg-clip-text text-transparent font-semibold px-8 py-6"
                onClick={() => {}}
              >
                CLAIM
              </Button>
            </div>
            <div className="text-center text-gray-400 space-y-1">
              <p className="text-sm">Score 10% from buddies +2.5% from their referrals.</p>
              <p>Get a ticket play pass for each fren.</p>
            </div>
          </div>
          <Button 
            className="w-9/12 bg-button-angular mx-auto bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold py-6 mt-auto mb-12"
            onClick={() => setIsDialogOpen(true)}
          >
            INVITE FRIENDS
          </Button>
        </CardContent>
      </Card>

      <InviteDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
      <BottomNav />
    </div>
  )
}

