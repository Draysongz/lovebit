'use client'

import { useState } from "react"
import { BoostCard } from "@/components/boost-card"
import { BoostDialog } from "@/components/boost-dialog"
import { BottomNav } from "@/components/button-nav"

const boosts = [
  {
    name: "TIME FREEZE",
    description: "The Time Freeze boost temporarily halts the timer for 10 seconds, allowing players to think strategically without the pressure of time running out.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "PIECE SHUFFLE",
    description: "Randomly rearranges all pieces on the board for a fresh perspective.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "HINT REVEAL",
    description: "Reveals a strategic hint to help solve the current puzzle.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "DOUBLE POINTS",
    description: "Doubles all points earned for a limited time.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "EXTRA MOVES",
    description: "Adds additional moves to help complete the puzzle.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "SLOW MOTION",
    description: "Slows down game elements for better control.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "SCORE MULTIPLIER",
    description: "Multiplies your score for the next few moves.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "PUZZLE PREVIEW",
    description: "Shows a brief preview of the completed puzzle.",
    progress: 5,
    total: 10,
    cost: 30
  },
  {
    name: "TIME EXTENSION",
    description: "Adds extra time to the countdown timer.",
    progress: 5,
    total: 10,
    cost: 30
  }
]

export default function BoostsPage() {
  const [selectedBoost, setSelectedBoost] = useState<typeof boosts[0] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-image text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#020aa1] via-[#fff] to-[#020aa1] bg-clip-text text-transparent mb-4">BOOSTS AND POWER-UPS</h1>
        <p className="text-gray-400 mb-8">
          Enhance your gameplay with special boosts! Use these power-ups to gain an advantage and complete puzzles faster.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {boosts.map((boost) => (
            <BoostCard
              key={boost.name}
              name={boost.name}
              progress={boost.progress}
              total={boost.total}
              cost={boost.cost}
              onClick={() => setSelectedBoost(boost)}
            />
          ))}
        </div>

        <BoostDialog
          isOpen={!!selectedBoost}
          onClose={() => setSelectedBoost(null)}
          boost={selectedBoost}
        />
      </div>
      <BottomNav />
    </div>
  )
}

