"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/uishad/tabs"
import { achievements } from "@/lib/achievement"
import { AchievementCard } from "@/components/achievement-card"
import { AchievementDrawer } from "@/components/achievement-drawer"
import { type Achievement } from "@/types/achievement"

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const completedAchievements = achievements.filter((a) => !a.isLocked)
  const lockedAchievements = achievements.filter((a) => a.isLocked)

  const handleAchievementClick = (achievement: Achievement) => {
    if (!achievement.isLocked) {
      setSelectedAchievement(achievement)
      setDrawerOpen(true)
    }
  }

  return (
    <div className="min-h-screen mx-auto p-6 bg-gradient-image">
      <div className="mb-6 mt-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#020aa1] via-[#ffffff] to-[#020aa1] bg-clip-text text-transparent">ACHIEVEMENT</h1>
        <p className="mt-2 max-w-md text-gray-300">
          Milestones that celebrate users&apos; positive actions and contributions to various causes. Each achievement not
          only rewards users with LoveBit points but also encourages them to engage in meaningful activities that promote
          social good, environmental awareness, and community support. Unlocking achievements enhances the gaming experience and fosters a sense of accomplishment and purpose.
        </p>
      </div>

      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-transparent">
          <TabsTrigger value="completed" className="data-[state=active]:border-b-2 data-[state=active]:border-[#020aa1] bg-gradient-to-r from-[#020aa1] via-[#ffffff] to-[#020aa1] bg-clip-text data-[state=active]:text-transparent">COMPLETED</TabsTrigger>
          <TabsTrigger value="locked" className="data-[state=active]:border-b-2 data-[state=active]:border-[#020aa1] bg-gradient-to-r from-[#020aa1] via-[#ffffff] to-[#020aa1] bg-clip-text data-[state=active]:text-transparent">LOCKED</TabsTrigger>
        </TabsList>
        <TabsContent value="completed">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {completedAchievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                onClick={() => handleAchievementClick(achievement)}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="locked">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {lockedAchievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                onClick={() => handleAchievementClick(achievement)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <AchievementDrawer
        achievement={selectedAchievement}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  )
}

