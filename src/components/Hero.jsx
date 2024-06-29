function Hero() {
    return (
        <div className="flex flex-col items-center py-2">
            <img className="px-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amar/1-FZ-herader_750x200.gif" alt="fumzone gif" />
            <div className="w-full flex flex-row items-center justify-evenly py-5 px-0">
                <div className="w-full relative flex items-center justify-center  px-[20px] py-[15px] border-b-4 border-black">Play now</div>
                <div className="w-full relative flex items-center justify-center  px-[20px] py-[15px]">Lucky Draw Winners</div>
            </div>
            <h2>You played, you won | Redeem your rewards</h2>
            <div className="w-full overflow-x-auto py-4 px-2 scroll-smooth whitespace-nowrap hide-scrollbar">
                <div className="flex flex-row space-x-4 ">
                    <div className="flex flex-row items-center justify-between rounded-md border-[1px] border-[#d5d9d9] overflow-hidden min-w-[310px] m-0">
                        <img className="h-[98px]  object-cover" src="https://m.media-amazon.com/images/G/31/img23/Beauty/PrimeCBcouponImage/Clothing.jpg" alt="clothing" />
                        <div className="flex flex-col items-start justify-center px-2 min-w-[224px]">
                            <h2 className="text-[15px] ">Get $75 back</h2>
                            <h3 className="text-[13px] text-gray-700">using prepaid payment method</h3>
                            <div className="flex flex-row items-center justify-between w-full ">
                                <h4 className="text-[10px] text-gray-400">Min Order: $250</h4>
                                <button className="bg-[#ffd814] border-2 border-[#fcd200] py-1 px-4 rounded-sm text-[13px] min-w-[96px]">Collect</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded-md border-[1px] border-[#d5d9d9] overflow-hidden min-w-[310px] m-0">
                        <img className="h-[98px]  object-cover" src="https://m.media-amazon.com/images/G/31/00/GameX/N2GL/beauty_Mini-carousal_176x200.jpg" alt="beauty" />
                        <div className="flex flex-col items-start justify-center px-2 min-w-[224px]">
                            <h2 className="text-[15px] ">Get $75 back</h2>
                            <h3 className="text-[13px] text-gray-700">using prepaid payment method</h3>
                            <div className="flex flex-row items-center justify-between w-full ">
                                <h4 className="text-[10px] text-gray-400">Min Order: $250</h4>
                                <button className="border-[1px] border-[#d5d9d9] py-1 px-4 rounded-sm text-[13px] min-w-[96px] shadow">Redeem</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero