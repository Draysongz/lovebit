'use client'
import { useRouter } from "next/navigation"

export default function OpenScreen() {

  const router = useRouter()
  const navigate = () => {
    router.push("/tap")
  }
  const tasks = () => {
    router.push("/tasks")
  }


  return (
    <div className="min-h-screen bg-gradient-image bg-cover bg-center bg-[#070B14] flex flex-col items-center justify-center px-4">
      {/* Main container with relative positioning for overlay images */}
      <div className="relative w-full max-w-md mx-auto">
        {/* First image */}
        <div className="relative z-10">
          <img 
            src="/robot.svg" 
            alt="Character" 
            className="w-[500px] h-auto mx-auto"
          />
        </div>
      </div>

      {/* Text with gradient */}
      <p className="text-center text-lg mt-8 max-w-md mx-auto bg-gradient-to-r from-[#4469EC] to-[#95A3FF] bg-clip-text text-transparent font-semibold">
        LET'S GET STARTED!
      </p>
      <p className="text-center text-lg text-gray-300 mt-8 mb-12 max-w-md mx-auto">Tap the button below to begin your journey with LoveBit.</p>

      {/* Button with gradient and glow effect */}
      <div className="">
        <button 
            className="relative group"
            onClick={navigate}
        >
            <div className="relative px-8 py-3 bg-button-angular rounded-lg leading-none">
            <span className="text-white font-medium text-lg">
                CONTINUE
            </span>
            </div>
        </button>
      </div>
    </div>
  )
}

