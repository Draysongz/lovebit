'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/uishad/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HandMetal } from 'lucide-react'

interface BoostDialogProps {
  isOpen: boolean
  onClose: () => void
  boost: {
    name: string
    description: string
    cost: number
  } | null
}

export function BoostDialog({ isOpen, onClose, boost }: BoostDialogProps) {
  if (!boost) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0a0b1e] border-[#1a1b3e] text-white w-80 rounded-md">
        <DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <p className="border px-4 py-1 rounded-full text-sm text-gray-400">LEVEL 1</p>
            <div className="w-16 h-16 rounded-full bg-[#1a1b3e] flex items-center justify-center">
              <Image src={"/touch.svg"} width={35} height={35} alt="Touch" />
            </div>
            <DialogTitle className="text-blue-400 text-xl">{boost.name}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          <p className="text-center text-gray-300">
            {boost.description}
          </p>

          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-bold flex items-center gap-2">
              <Image src={"/btclogo.svg"} width={30} height={30} alt="Hello" />
              <span className="text-2xl">{boost.cost} LP</span>
            </div>
            
            <Button 
              className="border bg-gradient-to-r from-[#020aa1] via-[#fff] to-[#020aa1] bg-clip-text text-transparent w-48 border-[#020aa1] hover:bg-blue-700"
            >
              PURCHASE
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

