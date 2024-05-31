import React from "react";
// import logo from "../assets/navbar/logo_at_nav_bar.png";
import Link from "next/link";

export const FooterComponent = () => {
  return (
    <footer className=" w-full p-[1rem] md:p-[2rem] bg-white    ">
      <div className="w-full flex flex-col gap-y-[2rem] md:flex-row justify-between mb-[2rem]">
        <div className="md:w-[30%] w-full">
          {/* <img src={logo} className="logo mb-[3rem]" /> */}
          <p className="mb-[3rem] font-extrabold text-red-500 text-2xl">GTS</p>
          <p className="text-left text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            quisquam, cupiditate illum facere voluptate accusantium cumque
            perspiciatis consequuntur culpa laboriosam eos sit odio officiis
            corrupti nulla repellat enim expedita ipsam.
          </p>
        </div>
        <ul className="md:w-[30%] w-full cursor-pointer space-y-[1rem] text-xs">
          <li className="text-xs md:text-xl font-bold text-red-500">
            Learn More
          </li>
          <li>About</li>
          <li>Service</li>
          <li>Testimonial</li>
        </ul>
        <ul className="md:w-[30%] w-full cursor-pointer space-y-[1rem] text-left text-xs">
          <li className="text-xs md:text-xl font-bold text-red-500">
            Get in Touch
          </li>
          <li>
            <Link href="https://www.google.com/maps/place/199+Westminster+Bridge+Rd,+London+SE1+7FP,+UK/@51.5004552,-0.1182397,17z/data=!3m1!4b1!4m6!3m5!1s0x487604b8bfec2215:0xa0422b413e3f2153!8m2!3d51.5004519!4d-0.1156648!16s%2Fg%2F11csdlgwqf?entry=ttu">
              Location: 199 Westminster Bridge Rd, London SE1 7FP, United
              Kingdom
            </Link>
          </li>
          <li>
            <Link href="https://www.google.com/maps/place/300-600+E+Rio+Salado+Pkwy,+Tempe,+AZ+85281,+USA/@33.4304878,-111.9347183,17z/data=!3m1!4b1!4m6!3m5!1s0x872b0920fe24e517:0xfced217c7c830a48!8m2!3d33.4299188!4d-111.9317553!16s%2Fg%2F11c53mzwh7?entry=ttu">
              Location: 300-600 E Rio Salado Pkwy, Tempe, AZ 85281
            </Link>
          </li>
          <li>
            <Link href="mailto:customer-support@goldtrustsecurities.online">
              Email: customer-support@goldtrustsecurities.online
            </Link>
          </li>
          <li>
            <Link href="tel:+1(480) 382-1908">Phone: +1(480) 382-1908 </Link>
          </li>
        </ul>
      </div>
      <div className="w-full text-xs flex justify-center">
        © 2024 Gold trust Securities. All rights reserved.
      </div>
    </footer>
  );
};
