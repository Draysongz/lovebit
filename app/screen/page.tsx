'use client'
import { useRouter } from "next/navigation"

export default function OpenScreen() {
  const router = useRouter()
  const navigate = () => {
    router.push("/second-screen")
  }
  return (
    <div className="min-h-screen bg-[url('/darkbg.svg')] bg-cover bg-center  flex flex-col items-center justify-center px-4">
      {/* Main container with relative positioning for overlay images */}
      <div className="relative w-full max-w-md mx-auto">
        {/* First image */}
        <div className="relative z-10">
          <img 
            src="/icon1.svg" 
            alt="Character" 
            className="w-[320px] h-auto mx-auto"
          />
        </div>
        
        {/* Telegram logo overlay */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/4 z-20">
          <img 
            src="/tg-image.svg" 
            alt="Telegram" 
            className="w-[150px] h-auto bg-transparent"
          />
        </div>
      </div>

      {/* Text with gradient */}
      <p className="text-center text-lg mt-8 mb-12 max-w-md mx-auto bg-gradient-to-r from-[#4469EC] to-[#95A3FF] bg-clip-text text-transparent font-medium">
        YOU HAVE BEEN IN TELEGRAM FOR A WHILE, TIME TO GET REWARDED IN LOVEBITS!
      </p>

      {/* Button with gradient and glow effect */}
      <button 
        className="relative group"
      >
        <div className="" />
        <div className="relative px-12 py-3 bg-button-angular rounded-lg leading-none" onClick={navigate}>
          <span className="text-white font-medium text-lg">
            CONTINUE
          </span>
        </div>
      </button>
    </div>
  )
}

