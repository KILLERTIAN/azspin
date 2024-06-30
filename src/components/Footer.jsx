function Footer() {
    return (

        <div className="flex flex-col items-center justify-center w-full bg-[#0D141E]">

            <div className="w-full flex flex-col items-center justify-start bg-[#37475A] px-[10px] py-[12px]">
                <ion-icon name="chevron-up-outline" style={{ color: 'white', height: "20px", width: "20px", margin: '5px' }}></ion-icon>
                <h3 className="text-white text-[11px] ">TOP OF PAGE</h3>
            </div>
            {/* Footer Item */}
            <div className="flex flex-row w-full items-start justify-between px-[20px] pb-[25px] bg-[#232f3e]">
                <ul className="flex flex-col w-[50%] items-start justify-center ">
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Amazon.in</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Your Orders</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Amazon App Download</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Your Account</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Returns</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Sell</li>
                </ul>
                <ul className="flex flex-col w-[50%] items-start justify-center">
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Your Amazon.in</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Amazon Pay</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Your Lists</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Your Recently Viewed Items</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Recalls and Pruduct Safety Alerts</li>
                    <li className="text-[15px] text-white font-semibold mt-[25px]">Customer Service</li>
                </ul>
            </div>

            <div className="flex flex-row items-center justify-center py-5 ">
                <ion-icon name="globe-outline" style={{ color: 'white', height: "15px", margin: '5px' }}></ion-icon>
                <h4 className="text-white text-[14px]">English</h4>
            </div>
            <div className="flex flex-row items-center justify-center py-5 pb-3 w-full">
                <h4 className="text-gray-300 text-[11px] px-2">Condition of Use</h4>
                <h4 className="text-gray-300 text-[11px] px-2">Privacy Notice</h4>
                <h4 className="text-gray-300 text-[11px] px-2">Interest Based Ads</h4>
            </div>
            <div className="flex flex-row items-center justify-evenly pb-10">
                <h4 className="text-gray-300 text-[11px]">Condition of Use</h4>
                
            </div>
        </div>
    )
}

export default Footer