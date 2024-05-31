import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";

function Service() {
  return (
    <div className="w-full px-7 mt-[5rem] mb-[4rem] h-screen " id="service">
      <p className="text-red-500 mt-3 font-medium text-center"> Our service</p>
      <p className=" text-5xl text-center mt-3 font-extrabold">
        Everything is ready <br />
        to transport
      </p>
      <p className=" text-center mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non adipisci
        enim animi culpa voluptatum quisquam cupiditate? Minima
        <br /> aut, esse culpa dignissimos eaque dolorem! Iste, nobis repellat
        beatae debitis delectus optio?
      </p>

      <div className="w-full flex mt-[5rem] px-[5rem] gap-x-2">
        <div className="w-1/2">
          <div className="flex justify-center items-center w-full gap-x-[4rem] bg-white rounded-md p-2 mb-3">
            <div>
              <p className="text-xs text-slate-500">From</p>
              <p className="font-bold text-red-500">England</p>
            </div>
            <div className=" flex flex-col gap-y-1">
              <FaArrowLeftLong />
              <FaArrowRightLong />
            </div>
            <div>
              <p className="text-xs text-slate-500">To</p>
              <p className="font-bold text-red-500">Scotland</p>
            </div>
          </div>
          <div className="bg-white rounded-md p-2">
            <div className="w-full px-3 flex justify-center gap-x-5 items-center mb-3">
              <div className="flex text-xs items-center gap-x-2 text-red-500">
                SHIP-34522 <IoCopy />
              </div>
              <p className="text-xs font-bold">Lorem ipsum</p>
            </div>
            <div className="flex justify-center gap-x-8 items-center text-xs mb-3">
              <div className="flex gap-x-3 items-center">
                <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
                  1
                </div>
                <p>
                  Depart from <span className="font-bold">England</span>
                </p>
              </div>
              <p>rafalgar Square, London</p>
            </div>
            <div className="flex justify-between pr-[20%] pl-[17%] items-center text-xs mb-3">
              <div className="flex gap-x-3 items-center">
                <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
                  2
                </div>
                <p>
                  Transit in <span className="font-bold">Wales</span>
                </p>
              </div>
              <p>Cardiff Castle, Cardiff</p>
            </div>
            <div className="flex justify-between pr-[12%] pl-[10%] items-center text-xs mb-3">
              <div className="flex gap-x-3 items-center ml-[2rem]">
                <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
                  3
                </div>
                <p>
                  Arrived at <span className="font-bold">Scotland</span>
                </p>
              </div>
              <p>Edinburgh Castle, Edinburgh</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-md p-2">
          <p className=" text-3xl mt-3 font-extrabold mb-3">
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
        </div>
      </div>
    </div>
  );
}

export default Service;
