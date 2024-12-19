import { type Achievement } from "../types/achievement"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AchievementCardProps {
  achievement: Achievement
  onClick?: () => void
}

export function AchievementCard({ achievement, onClick }: AchievementCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative aspect-square overflow-hidden rounded-lg",
        !achievement.isLocked && "cursor-pointer"
      )}
    >
      <Image
        src={achievement.image}
        alt={achievement.title}
        width={200}
        height={200}
        className={cn(
          "h-full w-full object-cover transition-opacity",
          achievement.isLocked && "opacity-50"
        )}
      />
      {achievement.isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <Image src={"/lock.svg"} width={40} height={40} alt="Hello" />
        </div>
      )}
      <div className="absolute border bg-button-angular bottom-0 left-0 right-0 p-4">
        <h3 className="text-xs text-center font-semibold text-black">{achievement.title}</h3>
      </div>
    </div>
  )
}

