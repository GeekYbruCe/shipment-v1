import { BiWorld } from "react-icons/bi";
import { BsFillFolderFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";

function About() {
  return (
    <div className="w-full px-7 mt-[5rem] mb-[4rem]" id="about">
      <p className="text-red-500 mt-3 font-medium">About</p>
      <div className="w-full flex mt-3 px-7 gap-x-8">
        <p className="w-1/2 text-5xl font-extrabold">
          Secure your business <br />
          needs
        </p>
        <p className="w-1/2 text-right">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non adipisci
          <br /> enim animi culpa voluptatum quisquam cupiditate? Minima
          <br /> aut, esse culpa dignissimos eaque dolorem! Iste, nobis
          <br /> repellat beatae debitis delectus optio?
        </p>
      </div>

      <div className="w-full flex justify-between mt-[5rem]">
        <div className="w-30% drop-shadow-xl h-[14rem] rounded-md p-3 ">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <BiWorld />
          </div>
          <p className="text-center font-bold">
            Your international shipping solution
          </p>
          <p className="text-xs mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro repellendus suscipit ipsam dolor totam architecto fugit
            voluptatibus, illo perspiciatis dolores! Ea saepe quisquam qui.
            Laboriosam accusantium ipsa ea quisquam!
          </p>
        </div>
        <div className="w-30% drop-shadow-xl h-[14rem] rounded-md p-3">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <BsFillFolderFill />
          </div>
          <p className="text-center font-bold">
            One place to save all your documents
          </p>
          <p className="text-xs mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro repellendus suscipit ipsam dolor totam architecto fugit
            voluptatibus, illo perspiciatis dolores! Ea saepe quisquam qui.
            Laboriosam accusantium ipsa ea quisquam!
          </p>
        </div>
        <div className="w-30% drop-shadow-xl h-[14rem] rounded-md p-3">
          <div className="p-2 w-[2rem] bg-red-300 text-red-600 rounded-md">
            <FaKey />
          </div>
          <p className="text-center font-bold">
            Secure, Transparent and reliable
          </p>
          <p className="text-xs mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            porro repellendus suscipit ipsam dolor totam architecto fugit
            voluptatibus, illo perspiciatis dolores! Ea saepe quisquam qui.
            Laboriosam accusantium ipsa ea quisquam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
