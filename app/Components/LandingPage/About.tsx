import { BiWorld } from "react-icons/bi";
import { BsFillFolderFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

function About() {
  return (
    <div className="w-full px-7 pt-[5rem] mb-[4rem]" id="about">
      <p className="text-red-500 mt-3 font-medium">About</p>
      <div className="w-full flex md:flex-row flex-col mt-3 px-7 gap-x-8">
        <p className="w-full md:text-5xl text-2xl md:text-left text-center font-extrabold">
          Secure your business <br />
          needs
        </p>
        <p className="w-full md:text-right md:p-0 px-3 text-justify md:m-0 mt-8">
            We prioritize the security and efficiency of your logistics operations. We understand the complexities involved in transporting
            goods and offer robust solutions to meet your business needs. From ensuring the safe storage
            of your inventory to managing the timely delivery of your products,
            our services are designed to provide you with peace of mind.
            Trust us to handle your logistics, so you can focus on growing your
            business without worrying about the intricacies of the supply chain.
        </p>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between mt-[5rem]">
        <div className="md:w-30% w-full drop-shadow-xl h-[14rem] rounded-md p-3 ">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <BiWorld />
          </div>
          <p className="text-center font-bold">
            Your international shipping solution
          </p>
          <p className="text-xs mt-5">
           Our company offers a reliable international shipping solution tailored to meet your
            global logistics needs. We handle everything from documentation to delivery,
            ensuring your products reach their destination safely and on time.
            With our expertise in international logistics, you can trust us to manage the
            complexities of cross-border shipping, allowing you to expand your business globally with ease.
          </p>
        </div>
        <div className="md:w-30% w-full drop-shadow-xl h-[14rem] rounded-md p-3">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <BsFillFolderFill />
          </div>
          <p className="text-center font-bold">
            One place to securely store your assets
          </p>
          <p className="text-xs mt-5">
            Our secure storage solutions provide a safe and reliable space for all your assets,
              whether they are important documents, valuable goods, or personal items.
              Our state-of-the-art facilities are designed to protect your assets with advanced security
              measures and climate control, ensuring that everything you store remains in perfect condition.
              Trust us to safeguard your items and provide easy access whenever you need them,
              giving you peace of mind and the freedom to focus on what matters most.
          </p>
        </div>
        <div className="md:w-30% w-full drop-shadow-xl h-[14rem] rounded-md p-3">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <FaKey />
          </div>
          <p className="text-center font-bold">
            Secure, Transparent and reliable
          </p>
          <p className="text-xs mt-5">
             Our services are built on the pillars of security, transparency, and reliability.
              We ensure that your assets are protected with top-tier security measures and provide clear,
              real-time updates on the status of your shipments. Our commitment to reliability means you can
              trust us to deliver your goods safely and on schedule,
              giving you the confidence to focus on your business growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
