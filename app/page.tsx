import About from "./Components/LandingPage/About";
import HomePart from "./Components/LandingPage/Home";
import Service from "./Components/LandingPage/Service";
import Testimonial from "./Components/LandingPage/Testimonial";
import { FooterComponent } from "./ui/Footer";

export default function Home() {
  return (
    <main className="">
      <HomePart />
      <About />
      <Service />
      <Testimonial />
      <div className="w-full flex flex-col gap-y-8 justify-center items-center p-3 bg-red-500 text-[#ebebeb] mt-3">
        <p className="md:text-5xl text-xl text-center font-extrabold leading-loose">
          Looking for leading shipping company for your business ?
        </p>
        <button className="bg-[#ebebeb] text-red-500 rounded-md md:text-xl text-xs p-1 md:p-3">
          Book a call
        </button>
      </div>
      <FooterComponent />
    </main>
  );
}
