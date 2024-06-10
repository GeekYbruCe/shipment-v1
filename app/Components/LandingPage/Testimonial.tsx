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
              We have successfully partnered with over 25+ businesses
              who trust us for their logistics needs. Their satisfaction is our priority,
              and we strive to exceed their expectations with every shipment.{" "}
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-5xl  font-bold text-red-500">
              1000+
            </p>
            <p className="text-xs md:text-left text-justify">
              Our services have facilitated the transport of over 1000+ shipments globally,
              ensuring timely and secure delivery. Our clients' positive feedback speaks volumes about our
              dedication to quality and reliability.
            {" "}
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
