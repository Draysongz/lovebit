'use client'
import { useRouter } from "next/navigation"

export default function OpenScreen() {

  const router = useRouter()
  const navigate = () => {
    router.push("/get-started")
  }
  const tasks = () => {
    router.push("/tasks")
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
            className="w-[300px] h-auto mx-auto"
          />
        </div>
      </div>

      {/* Text with gradient */}
      <p className="text-center text-lg mt-8 max-w-md mx-auto bg-gradient-to-r from-[#4469EC] to-[#95A3FF] bg-clip-text text-transparent font-medium">
        JOIN OUR COMMUNITY AND STAY UPDATED
      </p>
      <p className="text-center text-lg text-gray-300 mt-8 mb-8 max-w-md mx-auto">
        Follow us on social media and join our Telegram group
      </p>

      {/* Button with gradient and glow effect */}
      <div className="flex gap-2">
        <button className="relative group" onClick={tasks}>
          <div className="relative px-6 py-3.5 rounded-lg bg-black border border-[#002aa1]">
            <span className="font-medium text-sm bg-gradient-to-r from-[#020aa1] via-[#fff] to-[#020aa1] bg-clip-text text-transparent">
              VIEW SOCIAL LINKS
            </span>
          </div>
        </button>
        <button className="relative group" onClick={navigate}>
          <div className="relative px-8 py-3 bg-button-angular rounded-lg leading-none">
            <span className="text-white font-medium text-lg">CONTINUE</span>
          </div>
        </button>
      </div>
    </div>
  );
}

