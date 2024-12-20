import Image from "next/image"
const TapComponent = () => {
    return(
        <div className="flex gap-2 mt-4">
            <div className="group relative aspect-square overflow-hidden ml-2">
                <Image src={"/hand.svg"} alt="Saved" width={100} height={100} className="w-full h-full object-cover"/>
                <div className="absolute border bg-button-angular bottom-0 left-0 right-0 p-4">
                <h3 className="text-xs text-center font-semibold text-black">POLAR BEAR</h3>
                </div>
            </div>
            <div className="group relative aspect-square overflow-hidden">
                <Image src={"/donation.svg"} alt="Saved" width={100} height={100} className="w-full h-full object-cover"/>
                <div className="absolute border bg-button-angular bottom-0 left-0 right-0 p-4">
                <h3 className="text-xs text-center font-semibold text-black">DONATION</h3>
                </div>
            </div>
            <div className="group relative aspect-square overflow-hidden mr-2">
                <Image src={"/bear.svg"} alt="Saved" width={100} height={100} className="w-full h-full object-cover"/>
                <div className="absolute border bg-button-angular bottom-0 left-0 right-0 p-4">
                <h3 className="text-xs text-center font-semibold text-black">LOVE BIT</h3>
                </div>
            </div>
        </div>
    )
}

export default TapComponent;