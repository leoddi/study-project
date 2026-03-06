import Carousel from "@/components/HeroCarousel";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import hotelView from '../public/hotel-fischerwirt-zimmer-seminarr-druck-169-191.jpg'
import natureImg from '../public/img-nature.webp'
import activeImg from '../public/img-active.webp'
import cuisineImg from '../public/img-cuisine.webp'
import suedtirolGuestPass from '../public/guest-pass-brixencard-logo.webp'
import OffersCarouserl from "@/components/OffersCarouserl";
import blackLogo from '../public/logo-flyout.png'
import instaLogo from '../public/instagram-svgrepo-com.svg'
import facebookLogo from '../public/facebook-svgrepo-com.svg'
import Footer from "@/components/Footer";


const montserrat = Montserrat({
    subsets: ["latin"]
  });


export default function Home() {

  
  return (
    <div className="flex flex-col bg-white font-sans lg:pt-18 ">
      <main className={montserrat.className}>
        {/*Hero section carousel*/}
        <Carousel />

        {/*Main Section*/}
        <div className="md:max-w-2/3 lg:max-w-4/7 xl:max-w-5/12 mx-auto my-20 px-8">
          <div className="text-[#664631] flex-col justify-center items-center space-y-4">
            <Link href={'/'} className="uppercase text-[#99694A] text-xs font-semibold ml-4">welcome</Link>
            <h1 className="uppercase text-[#99694A] text-2xl lg:text-5xl font-light lg:font-extralight my-4 lg:my-8">Hotel Fischer - Your heartfelt hotel above Brixen</h1>
            <h2 className="font-semibold lg:font-medium text-lg lg:text-2xl">Where you can’t help but smile</h2>
            <p className="text-base/7 md:text-lg/10">Are you looking for a very special hotel in Brixen? Then you’ve come to the right place: Hotel Fischer at the Plose in Klerant, a family-run business with heartfelt hospitality and long-established tradition where you can drive to Brixen in just five minutes.</p>
            <Image src={hotelView} alt="hotel view" className="my-8" ></Image>
          </div>
        </div>

        {/*USP section*/}
        <div className="w-full flex-col text-black">
          <div className="w-full bg-[#F6F1ED] flex flex-col lg:flex-row justify-center lg:items-center space-x-20 py-12 px-8">
            <Image src={natureImg} alt="snow mountain landscape" width={483} height={350} />
            <div className="flex-col space-y-8 lg:w-5/12 my-16 lg:my-0">
              <h3 className="text-[#99694A] uppercase text-3xl md:text-4xl font-extralight lg:font-light">nature</h3>
              <p className="text-base/7 md:text-lg/9">Perched on the green plateau, Hotel Fischer overlooks Brixen, offers 360° views of the idyllic mountains and is the perfect holiday hotel for relaxing, recovering and resting in a tranquil setting.</p>
            </div>
          </div>
          <div className="w-full bg-white flex flex-col-reverse lg:flex-row justify-center lg:items-center space-x-20 py-12 px-8">
            <div className="flex-col space-y-8 lg:w-5/12 my-16 lg:my-0 mx-0">
              <h3 className="text-[#99694A] uppercase text-3xl md:text-4xl font-extralight lg:font-light">active</h3>
              <p className="text-base/7 md:text-lg/9">No matter the season, there are countless ways to enjoy an active holiday in South Tyrol: hiking, climbing, mountain biking, skiing and tobogganing to name just a few.</p> 
            </div>
            <Image src={activeImg} alt="winter sports in the mountain" />
          </div>
          <div className="w-full bg-[#F6F1ED] flex flex-col lg:flex-row justify-center lg:items-center space-x-20 py-12 px-8">
            <Image src={cuisineImg} alt="fresh local produces for our cousine" />
            <div className="flex-col space-y-8 lg:w-5/12 my-16 lg:my-0">
              <h3 className="text-[#99694A] uppercase text-3xl md:text-4xl font-extralight lg:font-light">cuisine</h3>
              <p className="text-base/7 md:text-lg/9">We love tantalising your taste buds on holiday. We use fresh, seasonal produce from South Tyrol and herbs from our own herb garden.</p>
            </div>
          </div>
        </div>

        {/*Brand Philosophy section*/}
        <div className=" h-[40vh] lg:h-[60vh] w-full text-[#974806] bg-[url(../public/teaser-text-bg.png)] flex justify-center items-center text-right">
          <p className="text-2xl/8 lg:text-3xl/12 font-light w-4/5 lg:w-auto"><span className="font-normal">Our philosophy </span><br />
          Those who hike are moving away from everyday life. In<br /> nature, we at Hotel Fischer stand for introspection,<br /> switching off stress and simply being. </p>
        </div>

        {/*Advantages card section*/}
        <div className="w-full h-[40vh] lg:h-[55vh] text-white bg-[url(../public/brixen-stadt-und-kultur-alexfilz-7593-002.webp)] bg-cover bg-center bg-[#655042] hover:bg-blend-soft-light opacity-90 brightness-90 flex items-center justify-center">
          <div className="flex-col w-5/6 space-y-6 *:cursor-pointer">
            <Image src={suedtirolGuestPass} alt="suedtirol alto adige guest pass" width={240} height={108} className="w-40 lg:w-auto"/>
            <p className="uppercase text-2xl/8 lg:text-4xl/14 font-light">Brixen Südtirol Card:<br /> free and priceless!</p>
            <div className="flex items-top lg:items-center text-xl lg:text-2xl mt-6 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-8 rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              <p>Your advantage card for your holidays</p>            
            </div>
          </div>
        </div>

        {/*Offers section*/}
        <div className="w-full bg-[#F6F1ED] flex flex-col items-center">
          <div className="w-full px-8 lg:7/9 xl:w-3/4 my-20">
            <OffersCarouserl />
          </div>
        </div>

        {/*Clients referrals section*/}
        <div className="w-full bg-white flex flex-col items-center">
          <div className="w-5/6 xl:w-2/3 my-20 space-y-8">
            <div className="w-full md:ml-12 lg:ml-32 space-y-2 tracking-wide">
              <h2 className="text-2xl lg:text-3xl uppercase text-[#974806] font-extralight cursor-pointer">Your best moments</h2>
              <h3 className="ml-12 lg:ml-44 hidden md:block text-xl lg:text-2xl lg:font-medium text-[#664631] hover:text-[#99694A] cursor-pointer">Be featured on our social media by using the #hotelfischer hashtag</h3>
            </div>
            <div className="flex space-x-4 md:justify-center overflow-x-scroll md:overflow-auto w-full">
              <div className="relative w-72 h-80 shrink-0">
                <div className="absolute inset-0 bg-cover bg-[url(../public/insta1.webp)]" />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 text-white text-xs/6 p-4">
                  <p>hotel.fisher<br />03/02/2026</p>
                </div>
              </div>
              <div className="relative w-72 h-80 shrink-0">
                <div className="absolute inset-0 bg-cover bg-[url(../public/insta2.webp)]" />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 text-white text-xs/6 p-4">
                  <p>hotel.fisher<br />03/02/2026</p>
                </div>
              </div>
              <div className="relative w-72 h-80 shrink-0">
                <div className="absolute inset-0 bg-cover bg-[url(../public/insta3.webp)]" />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 text-white text-xs/6 p-4">
                  <p>hotel.fisher<br />03/02/2026</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end underline underline-offset-16 text-lg uppercase text-[#99694A]  py-8">
                <Link href={'/offers'} >view more posts</Link>
            </div> 
          </div>
        </div>

        {/*Contacts section*/}
        <div className="relative w-full bg-[#F6F1ED] flex flex-col items-center pb-22">
          <div className="w-5/6 xl:w-3/5 flex flex-col justify-center items-center space-y-8 md:space-y-3">
            <div className="relative w-full h-32 md:h-40">
              <Image className="absolute bottom-0 right-1/2 translate-x-1/2 w-48 h-28 md:w-68 md:h-38" src={blackLogo} alt="hotel logo" width={267} height={170}></Image>
              <div className="flex space-x-2 absolute -bottom-16 md:bottom-0 right-1/2 md:right-1/4 translate-x-1/2 *:cursor-pointer">
                  <Image src={instaLogo} alt="Instragram logo" height={35} width={35} />
                  <Image src={facebookLogo} alt="Facebook logo" height={35} width={35} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-2 text-xl md:text-[1.4rem] mt-12 font-medium *:hover:text-[#99694A] text-[#4A362A] *:hover:cursor-pointer">
              <span>+39 0472 852075</span><span className="hidden md:block">•</span><span>info@hotel-fischer.it</span>
            </div>
            <p className="md:text-lg text-center">Hotel Fischer Srl • Via Trusent 7 • I-39042 Bressanone/Klerant • South Tyrol</p>
          </div>
          <Link href={'/newsletter'} className=" absolute -bottom-4 px-10 py-3 bg-[#4A362A] hover:bg-[#775139] text-lg uppercase text-white">subscribe newsletter</Link>
        </div>

        {/*Footer*/}
        <div className="w-full bg-white flex flex-col items-center pt-20 pb-4">
          <div className="flex justify-center space-x-6 flex-wrap mx-8 uppercase md:text-lg *:hover:underline *:cursor-pointer text-center">
            <p>voucher</p>
            <p>events and museums</p>
            <p>decelerated arrivals and departures</p>
            <p>bressanone - city of water</p>
            <p>location</p>
            <p>weather</p>
            <p>webcam</p>
          </div>
          <hr className="h-2 w-full my-10 text-[#AA9485]" />
          <Footer />
        </div>
        
      </main>
    </div>
  );
}
