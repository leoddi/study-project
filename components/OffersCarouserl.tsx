'use client'
import { useState } from "react"
import CarouselCard from "./CarouselCard"
import offers from '../public/offers-data/offers.json'
import Link from "next/link"


function OffersCarouserl() {
    const [index, setIndex] = useState(0);

    const offerList = offers;

    const next = ()=>{setIndex(index<offerList.length-3?index+1:0)};
    const prev = ()=>{setIndex(index==0?offerList.length-3:index-1)};


    

  return (
    <div className="space-y-8 relative">
        <div className="w-full md:ml-12 lg:ml-40 lg:space-y-2 tracking-wide">
            <h2 className="text-2xl lg:text-3xl uppercase text-[#974806] font-extralight cursor-pointer">Packages and Deals</h2>
            <h3 className="ml-12 lg:ml-44 hidden md:block text-xl lg:text-2xl lg:font-medium text-[#664631] hover:text-[#99694A] cursor-pointer">There is much to experience here.</h3>
        </div>
        <div className="overflow-x-scroll md:overflow-hidden w-full">
            <div className="w-full flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${index*33.333}%)`}}>
                {offerList.map((offer)=>(
                    <CarouselCard key={offer.title} name={offer.title} imagePath={offer.image} imageAlt={offer.alt} dates={offer.date} price={offer.price} />    
                ))}     
            </div>
        </div>
        <div className="hidden absolute top-8 right-8 md:flex space-x-1">
            <div onClick={prev} className="w-10 h-10 lg:w-16 lg:h-16 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.4" stroke="#99694A" className="size-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div onClick={next} className="w-10 h-10 lg:w-16 lg:h-16 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.4" stroke="#99694A" className="size-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
        <div className="flex justify-center lg:justify-end underline underline-offset-16 lg:text-lg uppercase text-[#99694A] font-medium py-8">
            <Link href={'/offers'} >All Offers</Link>
        </div> 
    </div>
  )
}

export default OffersCarouserl