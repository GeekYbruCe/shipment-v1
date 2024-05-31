"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./swiper.css";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const client = [
  {
    name: "Denis Duke",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis atque ipsa consequuntur cupiditate reiciendis suscipit? Eius recusandae molestiae earum. Dignissimos expedita optio ad exercitationem iusto minima itaque voluptatem aliquam.",
    image: "/client1.jpg",
  },
  {
    name: "Armani James",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis atque ipsa consequuntur cupiditate reiciendis suscipit? Eius recusandae molestiae earum. Dignissimos expedita optio ad exercitationem iusto minima itaque voluptatem aliquam.",
    image: "/client2.jpg",
  },
  {
    name: "Linda Grace",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis atque ipsa consequuntur cupiditate reiciendis suscipit? Eius recusandae molestiae earum. Dignissimos expedita optio ad exercitationem iusto minima itaque voluptatem aliquam.",
    image: "/client3.jpg",
  },
];

export function Swiper() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla w-full md:mt-0 mt-12 h-screen flex flex-col justify-center items-center  relative">
      <div
        className="embla__viewport w-full h-full overflow-hidden z-10"
        ref={emblaRef}
      >
        <div className="embla__container w-[90%] h-[95%] px-[1rem] ">
          {client.map((client) => (
            <div
              className="embla__slide md:items-end md:flex-row flex-col gap-x-9"
              key={client.image}
            >
              <div className="md:w-[50%] w-full overflow-hidden h-[70%] rounded-md border-8 border-red-500">
                <Image
                  //   placeholder="blur"
                  src={`${client.image}`}
                  alt="logo"
                  width={6000}
                  height={6000}
                  className="w-full h-full object-cover object-center  "
                />
              </div>
              <div className="md:w-[50%] w-full">
                <p className="text-xl font-bold text-red-500">{client.name}</p>
                <p className="text-xs md:text-left text-justify font-normal">
                  {client.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-3">
        <button
          className="embla__prev text-black cursor-pointer z-10"
          onClick={scrollPrev}
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="embla__next text-black cursor-pointer z-10"
          onClick={scrollNext}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
