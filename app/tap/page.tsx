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
    <div className="min-h-screen bg-gradient-image bg-cover bg-center bg-[#070B14] flex flex-col items-center">
      <div className="flex gap-2 pt-8 mb-8">
        <Image src="/icon4.svg" alt="icon4" width={40} height={40} />
        <span className="text-xl mt-2 font-medium">@Al3hemy</span>
      </div>
       <div className="flex gap-4">
         <Image src="/btclogo.svg" width={60} height={60} alt="btclogo" />
         <p className="text-5xl font-bold mt-2">{count.toLocaleString()}</p>
        </div> 
        <div className="flex border border-black bg-gray-950 pl-2 pr-3 rounded-md mt-4">
            <div className="flex">
                <Image alt="love" src="/love.png" width={55} height={55} />
                <p className="text-xl mt-3.5">:3</p> 
            </div> 
            <div className="flex">
                <Image alt="love" src="/time.png" width={55} height={55} />
                <p className="text-xl mt-3.5">:3</p> 
            </div> 
        </div>
      <div 
        ref={containerRef}
        className="relative w-full max-w-md mx-auto cursor-pointer"
        onClick={handleClick}
      >
        <Image 
          src="/icon5.svg" 
          alt="Character" 
          width={300}
          height={300}
          className="w-[300px] h-auto mx-auto"
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
  )
}

