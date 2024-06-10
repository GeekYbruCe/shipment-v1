import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopy } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface Props {
  open: boolean;
  tracker: string;
  setOpen: (open: boolean) => void;
}

const issues = [
  "It is a spam",
  "Inappropriate content",
  "Harassment or Bullying",
  "Misinformation or Fake News",
  "Inappropriate content",
  "Impersonation",
];

export default function Modal({ open, setOpen, tracker }: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative mobile:z-20 z-40"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black mobile:bg-opacity-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full mobile:items-start items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative mobile:min-h-full mobile:h-screen transform overflow-hidden mobile:rounded-none rounded-lg bg-white mobile:px-0 px-4 pb-4 mobile:pt-20 pt-5 text-left mobile:shadow-none shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div
                    className="flex mobile:justify-start mobile:gap-4 justify-between items-center 
                  mobile:border-b border-gray-300 mobile:pb-4 mobile:px-4"
                  >
                    <button
                      type="button"
                      className="hidden mobile:block"
                      onClick={() => setOpen(false)}
                    >
                      <BiArrowBack className="w-5 h-5 text-black " />
                    </button>
                    <div className="flex items-center gap-2">
                      <h3 className="font-montserrat font-medium text-base text-black">
                        Tracking Information
                      </h3>
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                    </div>

                    <button
                      type="button"
                      className="mobile:hidden focus:ring-2 ring-gray-500 p-[2px] rounded-md"
                      onClick={() => setOpen(false)}
                    >
                      <AiOutlineCloseCircle className="w-5 h-5 text-[#51526C] " />
                    </button>
                  </div>

                  <div className="mobile:px-4">
                    <p
                      className="font-montserrat font-medium text-base text-gray-400 mt-2 border-b border-gray-300 pb-4 
                  mobile:pt-8"
                    >
                      Based on your Tracking Number (
                      <span className="text-green-500">{tracker}</span>), these
                      are detailed updates about your package&apos;s journey.
                      From the moment it leaves our warehouse to its arrival at
                      your doorstep, you can see every step of the delivery
                      process.
                    </p>
                  </div>

                  <div className="mb-16 mobile:px-4">
                    <div className="w-full">
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
                      <div className="bg-white rounded-md p-2 mb-3">
                        <div className="w-full px-3 flex justify-center gap-x-5 items-center mb-3">
                          <div className="flex text-xs items-center gap-x-2 text-red-500">
                            SHIP-34522 <IoCopy />
                          </div>
                          <p className="text-xs font-bold">Lorem ipsum</p>
                        </div>
                        <div className="flex  justify-between md:gap-x-8 items-center text-xs mb-3">
                          <div className="flex gap-x-3 items-center">
                            <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
                              1
                            </div>
                            <p>
                              Depart from{" "}
                              <span className="font-bold">England</span>
                            </p>
                          </div>
                          <p>rafalgar Square, London</p>
                        </div>
                        <div className="flex justify-between  items-center text-xs mb-3">
                          <div className="flex gap-x-3 items-center">
                            <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
                              2
                            </div>
                            <p>
                              Transit in{" "}
                              <span className="font-bold">Wales</span>
                            </p>
                          </div>
                          <p>Cardiff Castle, Cardiff</p>
                        </div>
                        <div className="flex justify-between  items-center text-xs mb-3">
                          <div className="flex gap-x-3 items-center ">
                            <div className="p-1 w-[1.5rem] rounded-3xl flex justify-center items-center bg-red-500 text-[#ebebeb]">
                              3
                            </div>
                            <p>
                              Arrived at{" "}
                              <span className="font-bold">Scotland</span>
                            </p>
                          </div>
                          <p>Edinburgh Castle, Edinburgh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// clear later
