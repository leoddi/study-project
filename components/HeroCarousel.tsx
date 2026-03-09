'use client'
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image";
import slide1 from '../public/carousel-1.webp'
import slide2 from '../public/carousel-2.webp'
import slide3 from '../public/carousel-3.webp'
import slide4 from '../public/carousel-4.webp'
import logo from '../public/logo.png'

function Carousel() {
  const [counter, setCounter] = useState(0);

  const slides = [slide1, slide2, slide3, slide4];

  const prev = ()=>{setCounter(counter==0?slides.length-1:counter-1)};
  const next = useCallback(()=>{setCounter(counter==slides.length-1?0:counter+1)}, [counter, slides.length]);

  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const image = imgRef.current;

    if(image){
      image.classList.remove('animate-images');
      void image.offsetWidth;
      image.classList.add('animate-images');
    }

    const timer = setTimeout(() => {
      next();
    }, 5000);

    return ()=>clearTimeout(timer);
  }, [counter, next]);
  

  return (
    <div className="relative overflow-hidden w-full h-[40vh] lg:h-[70vh]">
        <Image src={slides[counter]} alt="test" ref={imgRef} className="w-full h-full contrast-75 object-cover"></Image>
        <div onClick={prev} className="hidden lg:block z-10 h-20 w-20 absolute bottom-20 left-1/3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.6" stroke="white" className="size-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div onClick={next} className="hidden lg:block z-10 h-20 w-20 absolute bottom-20 right-1/3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.6" stroke="white" className="size-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <Image src={logo} alt="hotel logo" className="w-42 md:w-56 lg:w-64 absolute top-0 left-1/2 -translate-x-1/2"/>
        <div className="rounded-full bg-[#A68547] absolute -bottom-12 -left-6 z-10 w-46 lg:w-60 h-46 lg:h-60 text-white uppercase text-base/5 lg:text-2xl/7 font-light text-wrap text-center py-8 px-6">
          <p>winter<br /> best price last minute<br /> and<br /> early bird</p>
        </div>
    </div>
  )
}

export default Carousel