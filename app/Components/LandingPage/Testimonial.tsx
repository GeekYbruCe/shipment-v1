import React from "react";

function Testimonial() {
  return (
    <div className="w-full px-7 mt-[5rem] mb-[4rem]" id="testimonial">
      <p className="text-red-500 mt-3 font-medium">Testimonial</p>
      <div className="w-full flex mt-3 px-7 gap-x-8">
        <p className="w-1/2 text-5xl font-extrabold">
          Sounds from our
          <br />
          happy clients
        </p>
        <div className="w-1/2 flex justify-between"></div>
      </div>
    </div>
  );
}

export default Testimonial;
