"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { BiPackage } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "./modal";
import MapComponent from "./MapComponent";

function HomePart() {
  const [showTracking, setShowTracking] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { handleSubmit, ...siginForm } = useFormik({
    initialValues: {
      Tid: "",
    },
    validationSchema: Yup.object().shape({
      Tid: Yup.string()
        .min(5, "Tracking ID must be 5 characters")
        .max(5, "Tracking ID must be 5 characters")
        .required("Tracking ID is required"),
    }),
    onSubmit: () => {
      setShowModal(true);
    },
  });

  return (
    <div className="w-full  mb-5 px-7 pt-[5rem]" id="home">
      <h1 className="text-center hidden md:block md:text-4xl font-extrabold">
        Grow your business. we will
        <br /> take care of the <span className="text-red-500">logistics</span>
      </h1>
      <h1 className="text-center text-2xl md:hidden font-extrabold">
        Grow your business. we will take care of the{" "}
        <span className="text-red-500">logistics</span>
      </h1>
      <p className="md:text-center text-justify mt-5 text-sm px-10 text-gray-600">
        At our company, we understand that your primary focus should be on
        growing your business and reaching new heights. That&apos;s why
        we&apos;re here to take the burden of logistics off your shoulders. With
        our comprehensive logistics solutions, you can rest assured that every
        aspect of your supply chain is managed with precision and efficiency.
        From warehousing and inventory management to transportation and
        delivery, we handle it all. Our team of experts is dedicated to ensuring
        your products are delivered on time, every time, so you can focus on
        what you do best - driving your business forward. Let us take care of
        the logistics, so you can take care of your success.
      </p>

      <div className="w-[90%] mx-auto h-[28rem] mt-8 rounded-md overflow-hidden relative flex justify-center md:justify-end items-center mb-3">
        <Image
          src="/landing.jpg"
          alt="logistics"
          quality={100}
          width={1000}
          height={1000}
          className="w-full h-full object-cover absolute -z-10"
        />
        <div className="md:w-[40%] w-[90%] md:mr-8 rounded-md md:h-[90%]  md:bg-[#ebebeb] bg-[#ebebebdc] p-5 overflow-hidden">
          <div className="w-full flex items-center justify-between text-xs px-5">
            <button
              onClick={() => {
                setShowTracking(true);
                setShowShipping(false);
              }}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-3xl  ${
                showTracking
                  ? "bg-red-500 text-[#ebebeb] shadow-md"
                  : "text-red-500"
              } text-xs flex md:text-xs justify-center items-center gap-x-4 transition-all duration-150 ease-in-out `}
            >
              <BiPackage />
              Tracking Package
            </button>
            <button
              onClick={() => {
                setShowShipping(true);
                setShowTracking(false);
              }}
              className={`flex text-xs justify-center items-center gap-x-4 px-2 md:px-4 py-1 md:py-2 rounded-3xl   ${
                showShipping
                  ? "bg-red-500 text-[#ebebeb] shadow-md"
                  : "text-red-500"
              } transition-all duration-150 ease-in-out `}
            >
              <TbTruckDelivery />
              Shipping route
            </button>
          </div>

          {showTracking ? (
            <>
              <div className="px-5 flex flex-col gap-y-2 mt-5 ">
                <label className="">Enter Tracking number below:</label>

                <input
                  placeholder="Tracking number"
                  type="text"
                  name="Tid"
                  id="Tid"
                  value={siginForm.values.Tid}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    siginForm.setFieldValue("Tid", e.target.value)
                  }
                  className="w-full rounded-3xl border-red-500/40 h-[2.5rem] border-2 text-red-500/40 flex items-center pl-5"
                />

                {siginForm.errors.Tid && (
                  <p className="text-xs mt-2 text-red-500">
                    {siginForm.errors.Tid}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full mt-3 py-2 rounded-3xl bg-red-500 flex justify-center items-center gap-x-4 text-[#ebebeb]"
                >
                  <BiPackage />
                  Track Order
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-full">
              <MapComponent />
            </div>
          )}
        </div>
      </div>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        tracker={siginForm.values.Tid}
      />
    </div>
  );
}

export default HomePart;
