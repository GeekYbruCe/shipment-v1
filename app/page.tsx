import About from "./Components/LandingPage/About";
import HomePart from "./Components/LandingPage/Home";
import Service from "./Components/LandingPage/Service";
import Testimonial from "./Components/LandingPage/Testimonial";

export default function Home() {
  return (
    <main className="">
      <HomePart />
      <About />
      <Service />
      <Testimonial />
    </main>
  );
}
