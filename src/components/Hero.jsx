function Hero() {
    return (
        <div className="flex flex-col py-2">
            <img className="px-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amar/1-FZ-herader_750x200.gif" alt="fumzone gif" />
            <div className="w-full flex flex-row items-center justify-evenly py-5 px-0">
                <div className="w-full relative flex items-center justify-center  px-[20px] py-[15px] border-b-4 border-black">Play now</div>
                <div className="w-full relative flex items-center justify-center  px-[20px] py-[15px]">Lucky Draw Winners</div>
            </div>
            <h2 className="px-3">You played, you won | Redeem your rewards</h2>
            <div className="w-full overflow-x-auto py-4 px-2 scroll-smooth whitespace-nowrap hide-scrollbar">
                <div className="flex flex-row space-x-4 ">
                    <div className="flex flex-row items-center justify-between rounded-md border-[1px] border-[#d5d9d9] overflow-hidden min-w-[310px] m-0">
                        <img className="h-[98px]  object-cover" src="https://m.media-amazon.com/images/G/31/img23/Beauty/PrimeCBcouponImage/Clothing.jpg" alt="clothing" />
                        <div className="flex flex-col items-start justify-center px-2 min-w-[224px]">
                            <h2 className="text-[15px] ">Get &#8377;75 back</h2>
                            <h3 className="text-[13px] text-gray-700">using prepaid payment method</h3>
                            <div className="flex flex-row items-center justify-between w-full ">
                                <h4 className="text-[10px] text-gray-400">Min Order: &#8377;250</h4>
                                <a href="https://www.amazon.in/b/?_encoding=UTF8&node=6648217031&ref_=in_cat_halo_mweb_bau_fashion&pd_rd_w=PLS3d&content-id=amzn1.sym.447b2776-cd0a-4b23-8528-0c2793b0182c&pf_rd_p=447b2776-cd0a-4b23-8528-0c2793b0182c&pf_rd_r=E79MDRQC78BJQ88DYXF5&pd_rd_wg=PBJNN&pd_rd_r=134677ef-195a-4eca-8760-7a1df95a8e2d" className="flex items-center justify-center bg-[#ffd814] border-2 border-[#fcd200] py-1 px-4 rounded-sm text-[13px] min-w-[96px]">Collect</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded-md border-[1px] border-[#d5d9d9] overflow-hidden min-w-[310px] m-0 ">
                        <img className="h-[98px]  object-cover" src="https://m.media-amazon.com/images/G/31/00/GameX/N2GL/beauty_Mini-carousal_176x200.jpg" alt="beauty" />
                        <div className="flex flex-col items-start justify-center px-2 min-w-[224px]">
                            <h2 className="text-[15px] ">Get &#8377;75 back</h2>
                            <h3 className="text-[13px] text-gray-700">using prepaid payment method</h3>
                            <div className="flex flex-row items-center justify-between w-full ">
                                <h4 className="text-[10px] text-gray-400">Min Order: &#8377;250</h4>
                                <a className="border-[1px] border-[#d5d9d9] py-1 px-4 rounded-sm text-[13px] min-w-[96px] shadow flex items-center justify-center" href="https://www.amazon.in/b/?_encoding=UTF8&node=1355016031&ref_=in_cat_halo_mweb_bau_beauty&pd_rd_w=GitYX&content-id=amzn1.sym.447b2776-cd0a-4b23-8528-0c2793b0182c&pf_rd_p=447b2776-cd0a-4b23-8528-0c2793b0182c&pf_rd_r=TXQMR02X87AETP57WK97&pd_rd_wg=S1xzs&pd_rd_r=ba0480d2-1050-47ee-a822-5edbabfbe52a">Redeem</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <img className="w-full object-cover" src="https://m.media-amazon.com/images/G/31/IN_App_Engagement/gamex/streaks/streakWidgetBackgroundImage.png" alt="daily challenge" />
                <div className="absolute w-full flex flex-col justify-center px-4 py-3 bg-opacity-75">
                    <div className="w-full flex flex-row items-center justify-between py-3">
                        <div className="w-full flex flex-col">
                            <h3 className="font-semibold text-[1.2em]">Daily essentials challenge</h3>
                            <h4>Complete streak & win guaranteed reward</h4>
                        </div>
                        <img src="https://m.media-amazon.com/images/S/engagement-central-media-prod-1/gamification/streak/4_OQFW3S.png" alt="fun zone" />
                    </div>
                    {/* streak */}
                    <div className="w-full flex flex-row flex-grow items-center justify-between gap-x-2">
                        <div className="flex flex-col rounded-sm border-[2px] border-[#ffa41c] bg-slate-50 items-center justify-center w-full max-w-[150px]">
                            <img className="m-auto h-[56px]" src="https://m.media-amazon.com/images/S/engagement-central-media-prod-1/gamification/streak/sticker-256x256_QHV2GW.png" alt="action image" />
                            <h3 className="items-center font-semibold text-[11px] text-center">Collect <br /> sticker</h3>
                            <a href="https://www.amazon.in/b?node=1355016031" className="bg-[#ffa41c] text-[#0f1111] w-full text-[13px] p-[3px] items-center justify-center flex">Start</a>
                        </div>
                        <div className="flex flex-col rounded-sm border-[2px] border-[#ffa41c] bg-slate-50 items-center justify-center w-full max-w-[150px]">
                            <img className="m-auto h-[56px]" src="https://m.media-amazon.com/images/S/engagement-central-media-prod-1/gamification/streak/sticker-256x256_LF7TQP.png" alt="action image" />
                            <h3 className="items-center font-semibold text-[11px] text-center">Collect <br /> sticker</h3>
                            <button className="bg-gray-400 text-[#0f1111] w-full text-[13px] p-[3px]">Locked</button>
                        </div>
                        <div className="flex flex-col rounded-sm border-[2px] border-[#ffa41c] bg-slate-50 items-center justify-center w-full max-w-[150px]">
                            <img className="m-auto h-[56px]" src="https://m.media-amazon.com/images/S/engagement-central-media-prod-1/gamification/streak/sticker-256x256_TPOBAJ.png" alt="action image" />
                            <h3 className="items-center font-semibold text-[11px] text-center">Collect <br /> sticker</h3>
                            <button className="bg-gray-400 text-[#0f1111] w-full text-[13px] p-[3px]">Locked</button>
                        </div>
                        <div className="flex flex-col rounded-sm border-[2px] border-[#ffa41c] bg-slate-50 items-center justify-center w-full max-w-[150px] min-h-[117.7px]">
                            <img className="m-auto h-[34px]" src="https://m.media-amazon.com/images/S/engagement-central-media-prod-1/gamification/streak/streeks-_YXTJTA.png" alt="action image" />
                            <span className="flex items-center justify-center bg-[#d13e3e] text-white text-[13px] px-1 rounded-lg">&#8377;60 back</span>
                            <h3 className="items-center font-semibold text-[11px] text-center">Collect <br /> sticker</h3>
                            <button className="bg-gray-400 text-[#0f1111] w-full text-[13px] p-[3px]">Locked</button>
                        </div>
                    </div>
                    {/* Timeline */}
                    <div className="flex flex-row items-center justify-start pt-3">
                        <svg width="15" height="15" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendar icon"><title id="calendarIcon">Calendar icon</title><desc id="calendarIconDesc">The icon denotes a calendar icon</desc><path d="M9.14573 0C9.53427 0 9.84925 0.314976 9.84925 0.703518V1.40704H12.6633C13.4051 1.40704 14.0128 1.98102 14.0665 2.70906L14.0704 2.81407V12.593C14.0704 13.37 13.4404 14 12.6633 14H1.40704C0.629951 14 0 13.37 0 12.593V2.81407C0 2.03699 0.629951 1.40704 1.40704 1.40704H4.22111V0.703518C4.22111 0.342729 4.49269 0.0453718 4.84258 0.00473305L4.92462 0C5.31316 0 5.62814 0.314976 5.62814 0.703518V1.40704H8.44221V0.703518C8.44221 0.342729 8.7138 0.0453718 9.06368 0.00473305L9.14573 0ZM4.22111 9.84925H1.40704V12.5859H4.22111V9.84925ZM8.44221 9.84925H5.62814V12.5859H8.44221V9.84925ZM12.6633 9.84925H9.84925V12.5859H12.6633V9.84925ZM4.22111 5.62814H1.40704V8.44221H4.22111V5.62814ZM8.44221 5.62814H5.62814V8.44221H8.44221V5.62814ZM12.6633 5.62814H9.84925V8.44221H12.6633V5.62814ZM12.6633 2.81407H1.40704V4.22111H12.6633V2.81407Z" fill="#373D3E"></path></svg>
                        <h3 className="ml-2">Ends on 7th July</h3>
                    </div>

                </div>
            </div>

            {/* new section */}
            <img className="pt-5 px-3" src="https://res.cloudinary.com/djoebsejh/image/upload/v1719807749/d52gstjexhjukkuxqpcd.gif" alt="hoome" />
            <a href="https://www.amazon.in/game/gPIE517/ref=fz_gblive_quiztime_lp_gPIE517/ref=mh_s9_cg_appgb_1a1_w?pf_rd_m=AT95IG9ONZD7S&pf_rd_s=mobile-hybrid-9&pf_rd_r=YWH72GMGYNBNY216AFMC&pf_rd_t=30901&pf_rd_p=bfe6b48f-c00c-4ab4-8de2-b96f8746c057&pf_rd_i=14351766031">
                <img className="py-7 px-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/Without-powered-by_Banners-770x350spinjuly.jpg" alt="hoome" />

            </a>

            <div className="flex flex-col p-3 items-center justify-center">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Yamini/qc_19th_june24/FZ_Week25-QC_01.jpg" alt="spin head" />
                <div className="flex flex-row w-full items-center justify-center">
                    <a className="w-[50%]" href="https://www.amazon.in/rewards/checkoutCoupons?uuid=NX9GWE" >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Yamini/qc_19th_june24/FZ_Week25-QC_02.gif" alt="1" />

                    </a>
                    <a className="w-[50%]" href="https://www.amazon.in/rewards/checkoutCoupons?uuid=LNB376" >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Yamini/qc_19th_june24/FZ_Week25-QC_03.gif" alt="2" />

                    </a>
                </div>
                <div className="flex flex-row w-full items-center justify-center">
                    <a className="w-[50%]" href="https://www.amazon.in/rewards/checkoutCoupons?uuid=NX9GWE" >
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Yamini/qc_19thjune/FZ_Week25-QC_04.jpg" alt="1" />
                    </a>
                    <a className="w-[50%]" href="https://www.amazon.in/rewards/checkoutCoupons?uuid=LNB376" >
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Yamini/qc_19thjune/FZ_Week25-QC_05.jpg" alt="2" />
                    </a>
                </div>
            </div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/GAMEX/SPIN_WIN/Ptron/ZENBUDS_PRO1/D132814684_IN_WLA_Ptron_LaunchDesignSIM_750x350.jpg" alt="a" className="py-2 px-3" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/June24/LLPage/gamex/_750x350.jpg" alt="b" className="py-2 px-3" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amritesh/Supradyn_Play_and_Win_copy_Rs_80.jpg" alt="c" className="py-2 px-3" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/tdhruvko/Vivo/XFold3/Gamex/D134821330_IN_WLD_vivo_XFold3Pro_launch_Gamex_750x350.jpg" alt="d" className="py-2 px-3" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN_Devices/BAU_GameX/With_Play_Now_750x350.png" alt="e" className="py-2 px-3" />

            {/* Divider */}
            <div className="h-[1px] bg-slate-300 w-full my-4"></div>

            {/* New games every day */}

            <h2 className="text-left px-3 text-[22px] font-semibold">New games every day</h2>
            <div className="w-full overflow-x-auto py-2 scroll-smooth whitespace-nowrap hide-scrollbar">
                <div className="flex flex-row space-x-4 px-3 w-full">
                    <div className="flex flex-col items-center ">
                        <img className="min-w-[260px] h-auto mb-1" src="https://m.media-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Fathima/DQT/Summer_DQT_slider_1400x800-CTA._SY700_QL85_.jpg" alt="each-1" />
                        <h4 className="text-[15px]">Win exiting prizes everyday</h4>
                    </div>
                    <div className="flex flex-col items-center pr-3">
                        <img className="min-w-[260px] h-auto mb-1" src="https://m.media-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amritesh/Summer_CTA_daily-STW_slider_1400x800._SY700_QL85_.jpg" alt="each-1" />
                        <h4 className="text-[15px]">Win exiting prizes everyday</h4>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-slate-400 w-full my-4"></div>
            <div className="flex flex-col items-center justify-center px-3">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amritesh/FZ-Coins-Dec-2022/faq/update/FAQ_1.png" alt="faq" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amritesh/FZ-Coins-Dec-2022/faq/update/FAQ_2.png" alt="faq" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amritesh/FZ-Coins-Dec-2022/faq/update/FAQ_3.png" alt="faq" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Mobile/Engagement/ASMs/Amritesh/FZ-Coins-Dec-2022/faq/update/FAQ_4.png" alt="faq" />
            </div>

        </div>
    )
}

export default Hero