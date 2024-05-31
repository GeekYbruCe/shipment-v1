import { Swiper } from "@/app/ui/Swiper/Swiper";

function Testimonial() {
  return (
    <div className="w-full px-7 pt-[5rem] mb-[4rem]" id="testimonial">
      <p className="text-red-500 mt-3 font-medium">Testimonial</p>
      <div className="w-full flex md:flex-row flex-col mt-3 px-7 gap-x-8">
        <p className="w-full md:text-left text-center text-2xl md:text-5xl font-extrabold">
          Sounds from our
          <br />
          happy partners
        </p>
        <div className="w-full flex gap-x-5 justify-between md:m-0 mt-3">
          <div>
            <p className="text-2xl md:text-5xl  font-bold text-red-500">25+</p>
            <p className="text-xs md:text-left text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ipsam officiis inventore distinctio ab necessitatibus{" "}
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-5xl  font-bold text-red-500">
              1000+
            </p>
            <p className="text-xs md:text-left text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem ipsam officiis inventore distinctio ab necessitatibus{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Swiper />
      </div>
    </div>
  );
}

export default Testimonial;
