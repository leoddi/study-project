import Carousel from "@/components/Carousel";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin"]
  });


export default function Home() {

  
  return (
    <div className="flex min-h-screen bg-red-100 font-sans lg:pt-18 ">
      <main className={montserrat.className}>
        <Carousel />
      </main>
    </div>
  );
}
