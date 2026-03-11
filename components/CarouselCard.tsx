import Image from "next/image"

//card component for offer carousel
function CarouselCard({name, imagePath, imageAlt, dates, price}: {name: string, imagePath: string, imageAlt: string, dates: string, price: string}) {
  return (
    <div className="w-11/12 sm:w-1/3 shrink-0 px-2.5 hover:cursor-pointer">
        <div className="w-full h-full relative">
          <Image src={imagePath} alt={imageAlt} width={500} height={500} className="w-full h-full object-cover"></Image>
          <div className="absolute inset-0 bg-linear-to-t from-[#4a362a]/95 from-0% to-transparent to-60% opacity-100 hover:opacity-0 transition-opacity delay-150 ease-in"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white space-y-2 lg:space-y-4 text-md lg:text-2xl">
              <p className="text-sm lg:text-lg">{dates}</p>
              <p>{name}</p>
              {price?<hr />:<></>}
              <p>{price}</p>
          </div>
        </div>
    </div>
  )
}

export default CarouselCard