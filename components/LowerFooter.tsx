import Image from "next/image"
import bikeAcademyImg from '../public/footer-media/plose-bike-guiding-academy.webp'
import eisacktalImg from '../public/footer-media/eisacktal-valle-isarco.webp'
import gpImg from '../public/footer-media/guest-pass-brixencard-logo.webp'
import suedtirolImg from '../public/footer-media/suedtirol.webp'
import brixenImg from '../public/footer-media/brixen.webp'
import bookingImg from '../public/footer-media/booking-south-tyrol.webp'
import tripAImg from '../public/footer-media/tripadvisor.webp'
import escapioImg from '../public/footer-media/escapio.webp'



function LowerFooter() {
  return (
    <div className="w-full flex flex-col items-center space-y-8">
        <div className="flex justify-center xl:justify-around space-x-4 items-center mx-8 lg:w-5/6 *:hover:cursor-pointer flex-wrap">
            <Image src={bikeAcademyImg} alt=""></Image>
            <Image src={eisacktalImg} alt=""></Image>
            <Image src={gpImg} alt=""></Image>
            <Image src={suedtirolImg} alt=""></Image>
            <Image src={brixenImg} alt=""></Image>
            <Image src={bookingImg} alt=""></Image>
            <Image src={tripAImg} alt=""></Image>
            <Image src={escapioImg} alt=""></Image>
        </div>
        <div className="flex space-x-2 *:hover:cursor-pointer text-xs md:text-sm flex-wrap mx-8 justify-center">
            <span>SocialWall</span>
            <span>•</span>
            <span>Legal Notice</span>
            <span>•</span>
            <span>Site map</span>
            <span>•</span>
            <span>Cookie Policy</span>
            <span>•</span>
            <span>Privacy</span>
            <span>•</span>
            <span>Cookie preferences</span>
        </div>
    </div>


  )
}

export default LowerFooter