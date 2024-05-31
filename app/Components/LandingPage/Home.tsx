import Image from "next/image";
import { BiPackage } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

function HomePart() {
  return (
    <div className="w-full  mb-5 px-7 mt-[5rem]">
      <h1 className="text-center text-4xl font-extrabold">
        Grow your business. we will
        <br /> take care of the <span className="text-red-500">logistics</span>
      </h1>
      <p className="text-center mt-3 text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui
        temporibus quasi, fugit similique explicabo consequuntur cumque hic
        magni voluptas, eaque blanditiis perspiciatis. Aspernatur accusamus
        fuga, magni aut odit porro. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laborum exercitationem mollitia rem sunt quas fuga ut
        repudiandae consequatur beatae assumenda fugit molestiae accusamus in
        eos, non animi, dicta numquam quasi!
      </p>

      <div className="w-[90%] mx-auto h-[28rem] mt-3 rounded-md overflow-hidden relative flex justify-end items-center mb-3">
        <Image
          src="/landing.jpg"
          alt="logistics"
          quality={100}
          width={1000}
          height={1000}
          className="w-full h-full object-cover absolute -z-10"
        />
        <div className="w-[40%] mr-8 rounded-md h-[90%]  bg-[#ebebeb] p-5">
          <div className="w-full flex items-center justify-center gap-x-12 text-xs">
            <div className="px-4 py-2 rounded-3xl bg-red-500 flex justify-center items-center gap-x-4 text-[#ebebeb]">
              <BiPackage />
              Tracking Package
            </div>
            <div className="flex justify-center items-center gap-x-4 text-red-500">
              <TbTruckDelivery />
              Shipping route
            </div>
          </div>

          <div className="w-[95%] mx-auto flex flex-col gap-y-4 mt-[4rem]">
            <div className="w-full rounded-3xl border-red-500/40 h-[2.5rem] border-2 text-red-500/40 flex items-center pl-5">
              Tracking number
            </div>
            <div className="w-full rounded-3xl border-red-500/40 h-[2.5rem] border-2 text-red-500/40 flex items-center pl-5">
              Tracking number
            </div>
            <div className="w-full rounded-3xl border-red-500/40 h-[2.5rem] border-2 text-red-500/40 flex items-center pl-5">
              Tracking number
            </div>
          </div>

          <div className="w-full mt-[5rem] py-2 rounded-3xl bg-red-500 flex justify-center items-center gap-x-4 text-[#ebebeb]">
            <BiPackage />
            Track Order
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePart;
