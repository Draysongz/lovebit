"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-transparent border-t border-[#020aa1]  py-1">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <Link
          href="/tap"
          className={`flex flex-col items-center justify-center min-w-[64px] ${
            pathname === "/tap"
              ? "bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-lg"
              : ""
          }`}
        >
          {pathname != "/tap" && (
            <Image
              src={"/tap.svg"}
              width={30}
              height={30}
              alt="tap"
            />
          )}
          <span
            className={`${
              pathname === "/tap"
                ? "font-semibold  text-white"
                : "text-xs text-zinc-400 mt-1"
            } `}
          >
            {pathname === "/tap" ? "tap".toUpperCase() : "Tap"}
          </span>
        </Link>
        <Link
          href="/tasks"
          className={`flex flex-col items-center justify-center min-w-[64px] ${
            pathname === "/tasks"
              ? "bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-lg"
              : ""
          }`}
        >
          {pathname != "/tasks" && (
            <Image src={"/tasks.svg"} width={30} height={30} alt="tasks" />
          )}
          <span
            className={`${
              pathname === "/tasks"
                ? "font-semibold  text-white"
                : "text-xs text-zinc-400 mt-1"
            } `}
          >
            {" "}
            {pathname === "/tasks" ? "tasks".toUpperCase() : "Tasks"}
          </span>
        </Link>
        <Link
          href="/play"
          className={`flex flex-col items-center justify-center min-w-[64px] ${
            pathname === "/play"
              ? "bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-lg"
              : ""
          }`}
        >
          {pathname != "/play" && (
            <Image src={"/game.svg"} width={30} height={30} alt="game" />
          )}
          <span
            className={`${
              pathname === "/play"
                ? "font-semibold  text-white"
                : "text-xs text-zinc-400 mt-1"
            } `}
          >
            {pathname === "/play" ? "play".toUpperCase() : "Play"}
          </span>
        </Link>
        <Link
          href="/boost"
          className={`flex flex-col items-center justify-center min-w-[64px] ${
            pathname === "/boost"
              ? "bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-lg"
              : ""
          }`}
        >
          {pathname != "/boost" && (
            <Image src={"/flight.svg"} width={30} height={30} alt="flight" />
          )}
          <span
            className={`${
              pathname === "/boost"
                ? "font-semibold  text-white"
                : "text-xs text-zinc-400 mt-1"
            } `}
          >
            {pathname === "/boost" ? "boost".toUpperCase() : "Boost"}
          </span>
        </Link>
        <Link
          href="/achievements"
          className={`flex flex-col items-center justify-center min-w-[64px] ${
            pathname === "/achievements"
              ? "bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-lg"
              : ""
          }`}
        >
          {pathname != "/achievements" && (
            <Image
              src={"/achievements.svg"}
              width={30}
              height={30}
              alt="achievements"
            />
          )}
          <span
            className={`${
              pathname === "/achievements"
                ? "font-semibold  text-white"
                : "text-xs text-zinc-400 mt-1"
            } `}
          >
            {pathname === "/achievements"
              ? "achievements".toUpperCase()
              : "Achievements"}
          </span>
        </Link>
        <Link
          href="/friends"
          className={`flex flex-col items-center justify-center min-w-[64px] ${
            pathname === "/friends"
              ? "bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-lg"
              : ""
          }`}
        >
          {pathname != "/friends" && (
            <Image src={"/friends.svg"} width={30} height={30} alt="friends" />
          )}
          <span
            className={`${
              pathname === "/friends"
                ? "font-semibold  text-white"
                : "text-xs text-zinc-400 mt-1"
            } `}
          >
            {pathname === "/friends" ? "friends".toUpperCase() : "Friends"}
          </span>
        </Link>
      </div>
    </nav>
  );
}
