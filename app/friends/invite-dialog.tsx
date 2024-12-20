'use client'

import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/uishad/dialog'
import { Button } from '@/components/ui/button'

export function InviteDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const inviteLink = 'https://example.com/invite/123' // Replace with your actual invite link
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-80 bg-slate-900 border-slate-800 rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-white">
            Invite a fren
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 p-6">
          <div className="bg-white p-4 rounded-lg">
            <QRCodeCanvas value={inviteLink} size={200} />
          </div>
          <Button 
            className="w-8/12 rounded-md bg-button-angular text-white font-semibold py-4"
            onClick={() => {}}
          >
            SEND
          </Button>
          <Button 
            variant="outline" 
            className="w-10/12 border-[#020aa1] bg-gradient-to-r from-[#020aa1] via-[#fff] to-[#020aa1] bg-clip-text text-transparent border hover:bg-blue-600/10"
            onClick={handleCopyLink}
          >
            Copy Link
          </Button>
          <Button 
            variant="ghost" 
            className="w-full rounded-md border border-slate-900 font-semibold bg-gray-500 text-white hover:text-white hover:bg-transparent"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

