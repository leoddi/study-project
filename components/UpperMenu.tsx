'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import logo from '../public/logo-fixed.png'
import bookIcon from '../public/food-svgrepo-com.svg'


function UpperMenu() {

  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
  <div>
    <div className="w-full bg-[#f6f1ed] hidden lg:flex items-center justify-between min-h-18 text-xs xl:text-sm text-[#99694A] tracking-wide font-extralight px-18 fixed z-50">
      <div className="flex space-x-5 xl:space-x-10 items-center tracking-widest">
        {!atTop? <Image src={logo} alt="hotel-logo" width={100} height={100} />:<></>}
        <p>Welcome</p>
        <p>Seminars</p>
        <p>Living Space</p>
        <p>Cuisine</p>
        <p>Well-being</p>
        <p>Summer</p>
        <p>Winter</p>
      </div>
      {atTop ? <div className="flex space-x-12">
        <p>+39 0472 852075 </p>
        <p>info@hotel-fischer.it</p>
      </div> :
      <div className="flex space-x-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </div>}
    </div>
    <div className="w-full bg-transparent flex justify-between fixed">
      <div className="flex justify-between lg:hidden z-50 space-x-1">
        <div className="h-12 w-12 bg-[#A65247] flex items-center justify-center cursor-pointer">
          <Image src={bookIcon} alt="booking-icon" height={30} width={30} />
        </div>
        <div className="h-12 w-12 bg-[#A68547] flex items-center justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
      </div>
      <div className="h-12 w-12 bg-[#4A362A]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-auto m-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  </div>

  )
}

export default UpperMenu