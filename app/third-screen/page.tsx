'use client'
import { useRouter } from "next/navigation"

export default function OpenScreen() {

  const router = useRouter()
  const navigate = () => {
    router.push("/forth-screen")
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
            src="/icon3.svg" 
            alt="Character" 
            className="w-[500px] h-auto mx-auto"
          />
        </div>
      </div>

      {/* Text with gradient */}
      <p className="text-center text-lg mt-8 max-w-md mx-auto bg-gradient-to-r from-[#4469EC] to-[#95A3FF] bg-clip-text text-transparent font-medium">
        EXCHANGE YOUR POINTS FOR LOVEBITS POINTS (LP)
      </p>
      <p className="text-center text-lg text-gray-300 mt-8 mb-12 max-w-md mx-auto">Accumulate points and exchange them for real value.</p>

      {/* Button with gradient and glow effect */}
      <div className="flex gap-2">
        <button className="relative group" onClick={tasks}>
        <div className="relative px-6 py-3.5 rounded-lg bg-black border border-[#002aa1]">
                <span className="font-medium text-md bg-gradient-to-r from-[#020aa1] via-[#fff] to-[#020aa1] bg-clip-text text-transparent">EXCHANGE INFO</span>
            </div>
        </button>
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

