"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-transparent border-t border-[#020aa1] px-1 py-1">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <Link
          href="/tap"
          className={`flex flex-col items-center justify-center min-w-[64px] ${
            pathname === "/tap"
              ? "bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-lg"
              : ""
          }`}
        >
          <span className="font-semibold text-white">TAP</span>
        </Link>
        <Link
          href="/tasks"
          className="flex flex-col items-center justify-center min-w-[64px]"
        >
          <Image src={"/tasks.svg"} width={30} height={30} alt="tasks" />
          <span className="text-xs text-zinc-400 mt-1">Tasks</span>
        </Link>
        <Link
          href="/play"
          className="flex flex-col items-center justify-center min-w-[64px]"
        >
          <Image src={"/game.svg"} width={30} height={30} alt="game" />
          <span className="text-xs text-zinc-400 mt-1">Play</span>
        </Link>
        <Link
          href="/boost"
          className="flex flex-col items-center justify-center min-w-[64px]"
        >
          <Image src={"/flight.svg"} width={30} height={30} alt="flight" />
          <span className="text-xs text-zinc-400 mt-1">Boost</span>
        </Link>
        <Link
          href="/achievements"
          className="flex flex-col items-center justify-center min-w-[64px]"
        >
          <Image src={"/achievements.svg"} width={30} height={30} alt="achievements" />
          <span className="text-xs text-zinc-400 mt-1">Achievements</span>
        </Link>
        <Link
          href="/friends"
          className="flex flex-col items-center justify-center min-w-[64px]"
        >
          <Image src={"/friends.svg"} width={30} height={30} alt="friends" />
          <span className="text-xs text-zinc-400 mt-1">Friends</span>
        </Link>
      </div>
    </nav>
  )
}

