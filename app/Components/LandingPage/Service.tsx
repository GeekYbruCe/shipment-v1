import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";
import cargo from "../../../public/cargo.jpg";
import ship from "../../../public/ship.jpg";
import truck from "../../../public/truck.jpg";
import rail from "../../../public/rail.jpg";
import gold from "../../../public/gold.jpg";
import warehouse from "../../../public/warehouse.jpg";
import Image from "next/image";

const services = [
  {
    img: cargo,
    name: "Air Freight",
    des: "Competitive air shipping rates and professional service. Many airline companies for you to choose from, for off-gauge goods shipping services. But we guarantee you will stick with us if you choose us.",
  },
  {
    img: ship,
    name: "Sea Freight",
    des: "We cover all global shipping lines, they offer us competitive rates, and stable space. With many shipping line companies, you can choose bulk-cargo ship, roll-on/roll-off ship, OOG service, and chartered ships.",
  },
  {
    img: truck,
    name: "Land Freight",
    des: "We can arrange the pick-up and trucking service, anytime, in any city of the US and some cities across the Globe. We offer same day shipping and guarantee 2 days delivery on express shipments.",
  },
  {
    img: rail,
    name: "Rail Freight Forwarder",
    des: "It doesn’t matter whether you are exporting, moving overseas or shipping your new entrepreneurial ventures’ first batch of products, door to door freight shipping does not have to be expensive or frustrating.",
  },
  {
    img: gold,
    name: "Storage Services",
    des: "Our Safety Deposit Services are situated across select branches across the Globe. We provide world grade deposit boxes for the safe storage of your jewelries and highly sensitive documents.",
  },
  {
    img: warehouse,
    name: "Warehouse",
    des: "We provide world-class warehouse services across the globe. Whatever you need stored for a long period, short period or before shipping, we are available to store for you.",
  },
];

function Service() {
  return (
    <div className="w-full px-7 pt-[5rem] mb-[4rem]  " id="service">
      <p className="text-red-500 mt-3 font-medium text-center"> Our service</p>
      <p className="text-2xl md:text-5xl text-center mt-3 font-extrabold">
        Everything is ready <br />
        to transport
      </p>
      <p className=" md:text-center text-justify mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non adipisci
        enim animi culpa voluptatum quisquam cupiditate? Minima
        <br /> aut, esse culpa dignissimos eaque dolorem! Iste, nobis repellat
        beatae debitis delectus optio?
      </p>

      <div className="w-full flex md:flex-row flex-col mt-[5rem] md:px-[5rem] gap-x-2">
        {/* <div className="md:w-1/2 w-full bg-white rounded-md p-2">
          <p className=" md:text-3xl text-2xl mt-3 font-extrabold mb-3">
            Inland and ocean shipping solutions
          </p>
          <p className="text-xs mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            sint, illum fuga, culpa minus veniam corrupti officia illo
            consequatur dignissimos natus et saepe. Iure fuga deserunt et quam!
            Nesciunt, magnam!
          </p>
          <div className="flex gap-x-3 text-xs items-center mb-3">
            <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
              1
            </div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>{" "}
          <div className="flex gap-x-3 text-xs items-center mb-3">
            <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
              2
            </div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>{" "}
          <div className="flex gap-x-3 text-xs items-center mb-3">
            <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
              3
            </div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-start">
          {services.map((service, index) => (
            <div key={index} className="w-80 ">
              <div className="w-80 h-48 overflow-hidden mb-4 cursor-pointer">
                <Image
                  src={service.img}
                  alt="service"
                  className="w-full h-full object-contain hover:scale-105 transition duration-150 ease-in-out"
                />
              </div>

              <h3 className="font-semibold text-2xl text-black mb-4 px-4 cursor-pointer">
                {service.name}
              </h3>

              <p className="text-base text-justify text-gray-600 px-4">
                {service.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
