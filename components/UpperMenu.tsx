'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import logo from '../public/logo-fixed.png'
import bookIcon from '../public/food-svgrepo-com.svg'
import DropDownMenu from "./DropDownMenu";
import logoWithBg from '../public/logo-flyout.png'
import Link from "next/link";
import instaLogo from '../public/instagram-svgrepo-com.svg'
import facebookLogo from '../public/facebook-svgrepo-com.svg'
import whiteInstaLogo from '../public/instagram-svgrepo-com-white.svg'
import whiteFbLogo from '../public/facebook-svgrepo-white.svg'

const ROUTE_MAP = {
        welcome: ['welcome', 'the fischer family', 'panoramic views', 'brixen sudtirol card', 'your perfect vacation day'],
        seminars: ['seminars', 'seminar room', 'catering', 'fringe events'],
        livingSpace: ['rooms', 'rate & conditions', 'included services', 'packages', 'vouchers', 'pictures'],
        cuisine: ['cuisine', 'inspiration', 'for locals', 'our cuisine', 'wine cellar', 'a love letter to nature'],
        wellBeing: ['well being', 'saunas', 'our pools', 'massages', 'day spa'],
        summer: ['summer', 'hiking', 'the hiking destination of plose', 'mountain biking', 'adventure', 'highlights'],
        winter: ['winter', 'skiing', 'plose sky resort', 'snowshoeing', 'tobogganging', 'all information'],
        usefulInfo: ['Vouchers', 'Events and Museums', 'Decelerated arrivals and departures', 'Bressanone City of Water', 'Location', 'Weather', 'Webcam']
    }


function UpperMenu() {
  type MenuRoute = "welcome" | "seminars" | "cuisine" | "summer" | "winter" | "livingSpace" | "wellBeing" | "usefulInfo";

  const links = Object.keys(ROUTE_MAP);

  const [atTop, setAtTop] = useState(true);
  const [menuNav, setmenuNav] = useState<MenuRoute|"">("");
  const [showMenu, setshowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
  <div>
    <div className="w-full bg-[#f6f1ed] hidden lg:flex items-center justify-between min-h-18 text-xs lg:text-sm xl:text-base text-[#99694A] px-16 fixed z-50 text-nowrap">
      <div className="flex space-x-4 xl:space-x-8 items-center tracking-wide cursor-pointer capitalize">
        {!atTop? <Image src={logo} alt="hotel-logo" width={100} height={100} />:<></>}
        {links.slice(0, -1).map((link, i)=>(<p key={i} onMouseOver={()=>setmenuNav(link as MenuRoute)}>{link.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>))}
      </div>
      {atTop ? <div className="flex space-x-12">
        <p>+39 0472 852075 </p>
        <p>info@hotel-fischer.it</p>
      </div> :
      <div className="flex space-x-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </div>}      
    </div>

    {menuNav!=""?
      <div className='w-full h-full absolute hidden lg:block mt-18'>
        <div onMouseLeave={()=>setmenuNav("")} className='w-2/3 h-5/7 bg-blue-50 flex z-50 absolute'>
          <div className="bg-[#4A362A] h-full w-1/2 flex justify-center items-center uppercase text-[#9e8879] text-xl font-light space-y-4">
            <DropDownMenu links={ROUTE_MAP[menuNav]} divider={true} />
          </div>
          <div className="bg-white h-full w-1/2 flex flex-col items-center justify-between">
            <Image src={logoWithBg} alt="hotel-logo" height={300} width={300} />
            <div className="h-1/2 w-full p-10 text-[#99694A]">
              <div className="flex justify-between items-center">
                <div className="space-x-2 *:hover:underline">
                  <Link href="/de">DE</Link>
                  <span>•</span>
                  <Link href="/it">IT</Link>
                </div>
                <div className="flex space-x-2 ">
                  <Image src={instaLogo} alt="Instragram logo" height={35} width={35} />
                  <Image src={facebookLogo} alt="Facebook logo" height={35} width={35} />
                </div>
              </div> 
              <hr className="my-5 " />
              <div className="flex flex-col flex-wrap space-y-2 h-full text-lg pb-8 space-x-6 text-black">
                {ROUTE_MAP['usefulInfo'].map((link, i)=>(<p className="w-1/2" key={i}>{link}</p>))}
              </div>
            </div>
          </div>
          <div onClick={()=>setmenuNav("")} className="top-0 left-0 absolute m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="white" className="size-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    : <></>}


    <div className="w-full bg-transparent flex justify-between fixed z-10">
      <div className="flex justify-between lg:hidden space-x-1">
        <div className="h-12 w-12 bg-[#A65247] flex items-center justify-center cursor-pointer">
          <Image src={bookIcon} alt="booking-icon" height={30} width={30} />
        </div>
        <div className="h-12 w-12 bg-[#A68547] flex items-center justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
      </div>
      <div onClick={()=>{setshowMenu(!showMenu); setmenuNav("")}} className={`${showMenu? 'bg-white':'bg-[#4A362A]'} h-12 w-12`}>
        {showMenu? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" stroke="black" className="size-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>:
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-auto m-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        }
      </div>
    </div>

    {showMenu?
      <div className="w-full h-full absolute lg:hidden bg-[#4A362A] pt-18 px-10">
        <ul className="text-lg uppercase text-[#AA9384] tracking-wide mb-8">
          {links.map((link, i)=>(
            <div key={i}>
              <li className="w-min text-nowrap hover:text-[#A68547]  cursor-pointer" onMouseOver={() => setmenuNav(link as MenuRoute)} onMouseLeave={()=>setmenuNav("")} >{link.replace(/([A-Z])/g, ' $1').toLowerCase()}</li>
              <div className="text-white font-light space-y-4 text-sm py-2">
                {menuNav==link?<DropDownMenu links={ROUTE_MAP[link as MenuRoute]} divider={false} />:<></>}              
              </div>
            </div>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <div className="space-x-2 *:hover:underline">
            <Link href="/de">DE</Link>
            <span>•</span>
            <Link href="/it">IT</Link>
          </div>
          <div className="flex space-x-2">
            <Image src={whiteInstaLogo} alt="Instragram logo" height={35} width={35} />
            <Image src={whiteFbLogo} alt="Facebook logo" height={35} width={35} />
          </div>
        </div>
        <hr className="my-5 text-white" />
        <p>+39 0472 852075 </p>
        <p>info@hotel-fischer.it</p>
      </div>
    :<></>}


  </div>

  )
}

export default UpperMenu