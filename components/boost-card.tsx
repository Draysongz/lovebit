'use client'

import { Card } from "@/components/uishad/card"
import { Button } from "@/components/uishad/button"
import { HandMetal } from 'lucide-react'
import Image from "next/image"

interface BoostCardProps {
  name: string
  progress: number
  total: number
  cost: number
  onClick: () => void
}

export function BoostCard({ name, progress, total, cost, onClick }: BoostCardProps) {
  return (
    <Card 
      className="bg-[#0a0b1e] border-[#020aa1] hover:border-[#2a2b5e] transition-colors cursor-pointer group"
      onClick={onClick}
    >
      <div className="p-3 flex flex-col items-center gap-1.5">
        <div className="w-8 h-8 rounded-full bg-[#1a1b3e] flex items-center justify-center group-hover:bg-[#2a2b5e] transition-colors">
          <Image src={"/touch.svg"} width={35} height={35} alt="Touch" />
        </div>
        
        <h3 className="text-blue-400 font-medium text-xs mt-1">{name}</h3>
        
        <div className="text-white text-xs">
          {progress} / {total}
        </div>

        <Button 
          variant="outline" 
          className="w-9/12 rounded-full bg-[#1a1b3e] border-[#2a2b5e] hover:bg-[#2a2b5e] text-xs"
        >
          LEVEL 1
        </Button>

        <Button 
          className="w-10/12 bg-blue-600 hover:bg-blue-700 text-white mt-2 bg-button-angular"
        >
          <span className="text-sm flex gap-1">
           <Image src={"/btclogo.svg"} width={20} height={20} alt="Hello" /> {cost} LP
          </span>
        </Button>
      </div>
    </Card>
  )
}

