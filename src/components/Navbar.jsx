function Navbar() {
    return (

        <div className="flex flex-col items-center justify-center w-full bg-[#232f3e]">
            <div className="w-full bg-[#232f3e]  max-w-[500px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center pl-2">
                    <ion-icon name="menu" style={{ color: 'white', fontSize: '30px', margin: '5px' }}></ion-icon>
                    <img className="h-7 m-2" src="amazon.png" alt="Amazon Logo" />
                </div>
                <div className="flex flex-row items-center">
                    <img className="h-10 m-2" src="profile.png" alt="cart" />
                    <img className="h-10 m-2" src="cart1.png" alt="cart" />
                </div>
            </div>
            <div className="w-[95%] bg-white flex items-center justify-center rounded-sm m-1">
                <input className="pl-2 flex-grow focus:outline-none" type="text" placeholder="Search Amazon.in" />
                <button className="bg-[#febd69] rounded-sm p-2 flex items-center justify-center">
                    <ion-icon name="search-sharp" style={{ fontSize: '30px' }}></ion-icon>
                </button>
            </div>
            <div className="w-full flex flex-row items-center justify-start bg-[#37475A] px-[10px] py-[12px]">
            <ion-icon name="location-outline" style={{ color: 'white', height:"20px",width:"20px", margin: '5px' }}></ion-icon>
                <h3 className="text-white text-[13px] ">Delivering to New Delhi 110045 - Update location</h3>
            </div>

        </div>
    )
}

export default Navbar