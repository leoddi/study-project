import Carousel from "@/components/Carousel";
import FixedBtns from "@/components/FixedBtns";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin"]
  });


export default function Home() {

  
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans pt-18 ">
      <main className={montserrat.className}>
        <Carousel />
        <FixedBtns />
      </main>
    </div>
  );
}
