"use client"

import { type Achievement } from "../types/achievement"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/uishad/drawer"
import Image from "next/image"
import { Coins } from 'lucide-react'

interface AchievementDrawerProps {
  achievement: Achievement | null
  open: boolean
  onClose: () => void
}

export function AchievementDrawer({ achievement, open, onClose }: AchievementDrawerProps) {
  if (!achievement) return null

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="bg-gradient-image text-foreground">
        <div className="flex justify-between mb-4">
          <DrawerHeader>
            <DrawerTitle className="text-xl bg-gradient-to-r from-[#020aa1] via-[#ffffff] to-[#020aa1] bg-clip-text font-bold text-transparent">
              {achievement.title}
            </DrawerTitle>
            <DrawerDescription className="text-sm">
              {achievement.description}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="relative w-32 h-40 overflow-hidden rounded-sm">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-xl pl-4 bg-gradient-to-r from-[#020aa1] via-[#ffffff] to-[#020aa1] bg-clip-text text-transparent">POINTS EARNED</h1>
          <p className="pl-4 text-gray-300">{achievement.points} Lovebit Points</p>
        </div>
        <div>
          <h1 className="text-xl pl-4 bg-gradient-to-r from-[#020aa1] via-[#ffffff] to-[#020aa1] bg-clip-text text-transparent">ADDITIONAL REWARDS</h1>
          <li className="pl-4 text-sm text-gray-300">Badge: "{achievement.additionalRewards.badge}" badge displayed on the user profile</li>
          <li className="pl-4 text-sm text-gray-300">In-App Currency: {achievement.additionalRewards.currency} LoveCoins (used for purchasing in-game items)</li>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

