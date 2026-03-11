import Image from "next/image"
import bookIcon from '../public/food-svgrepo-com.svg'

//fixed btns for book and enquiry
function FixedBtns() {
  return (
    <div className="hidden lg:block fixed bottom-28 -right-42 space-y-4 z-50 text-white">
        <div className="h-18 bg-[#A65247] w-60 flex items-center space-x-12 px-3 text-xl uppercase hover:-translate-x-40 transition ease-in delay-200">
            <Image src={bookIcon} alt="booking-icon" height={45} width={45} />
            <p>book</p>
        </div>
        <div className="h-18 bg-[#A68547] w-60 flex items-center space-x-12 px-3 text-xl uppercase hover:-translate-x-40 transition ease-in delay-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p>enquiry</p>
        </div>
    </div>
  )
}

export default FixedBtns