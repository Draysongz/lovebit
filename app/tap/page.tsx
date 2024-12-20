'use client'
import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BottomNav } from "@/components/button-nav"
import Image from "next/image"

export default function OpenScreen() {
  const [count, setCount] = useState(134690)
  const [animations, setAnimations] = useState<{ id: number; x: number; y: number }[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Ensure the animation stays within the bounds of the container
    const boundedX = Math.min(Math.max(x, 20), rect.width - 20)
    const boundedY = Math.min(Math.max(y, 20), rect.height - 20)

    setCount(prevCount => prevCount + 1)
    setAnimations(prev => [...prev, { id: Date.now(), x: boundedX, y: boundedY }])

    setTimeout(() => {
      setAnimations(prev => prev.slice(1))
    }, 500)
  }, [])

  return (
    <div className="min-h-screen bg-[url('/darkbg.svg')] bg-cover bg-center  flex flex-col items-center">
      <div className="flex gap-2">
        <div className="relative aspect-square ml-2">
          <Image src={"/hand.svg"} alt="Saved" width={100} height={100} className="w-full h-full object-cover"/>
          <div className="absolute border bg-button-angular bottom-0 left-0 right-0 p-4">
          <h3 className="text-xs text-center font-semibold text-white">POLAR BEAR</h3>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image src={"/donation.svg"} alt="Saved" width={100} height={100} className="w-full h-full object-cover"/>
          <div className="absolute border bg-button-angular bottom-0 left-0 right-0 p-4">
          <h3 className="text-xs text-center font-semibold text-white">DONATION</h3>
          </div>
        </div>
        <div className="relative aspect-square mr-2">
          <Image src={"/bear.svg"} alt="Saved" width={100} height={100} className="w-full h-full object-cover"/>
          <div className="absolute border bg-button-angular bottom-0 left-0 right-0 p-4">
          <h3 className="text-xs text-center font-semibold text-white">LOVE BIT</h3>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <Image src="/btclogo.svg" width={60} height={60} alt="btclogo" />
        <p className="text-5xl text-white font-bold mt-2">{count.toLocaleString()}</p>
      </div>
      <div className="flex border border-black bg-gray-950 pl-2 pr-3 rounded-md mt-4">
        <div className="flex">
          <Image alt="love" src="/love.png" width={55} height={55} />
          <p className="text-xl mt-3.5 text-white">:3</p>
        </div>
        <div className="flex">
          <Image alt="love" src="/time.png" width={55} height={55} />
          <p className="text-xl mt-3.5 text-white">:3</p>
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative w-full max-w-md mx-auto cursor-pointer mt-8"
        onClick={handleClick}
      >
        <Image
          src="/home-logo.svg"
          alt="Character"
          width={300}
          height={300}
          className="w-[280px] h-auto mx-auto"
        />
        <AnimatePresence>
          {animations.map(({ id, x, y }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, x: x - 20, y: y - 70 }}
              exit={{ opacity: 0, y: y - 120 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute pointer-events-none"
              style={{ left: 0, top: 0 }}
            >
              <Image src="/btclogo.svg" width={40} height={40} alt="Bitcoin" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <BottomNav />
    </div>
  );
}

