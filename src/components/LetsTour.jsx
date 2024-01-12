import React, { useEffect } from "react";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { GiStairs } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { seller1 } from "../assets";
import { LetsTourImg } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const LetsTour = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="w-full py-6 sm:px-20 px-6 flex flex-col md:flex-row">
      <div className="flex w-full justify-center  md:w-[50%] flex-col gap-2">
        <div className="flex flex-col py-3  gap-2">
          <p data-aos="fade-right" className="font-lexend text-sm text-orange">
            Ready to Sell!
          </p>
          <p
            data-aos="fade-left"
            className="font-lexend font-bold text-primary text-3xl"
          >
            Let’s tour and see our house!
          </p>
        </div>
        <p
          data-aos="fade-down"
          className="font-lexend text-sm max-w-[70%] text-fadeblue"
        >
          Houses recommended by our partners that have been curated to become
          the home of your dreams!
        </p>
        <div className="flex flex-col gap-2 py-4">
          <p
            data-aos="zoom-out"
            className="font-lexend font-medium text-primary"
          >
            House Detail
          </p>
          <div className="grid grid-cols-2 text-fadeblue font-lexend text-sm">
            <div
              data-aos="zoom-in-right"
              className="flex hover:text-primary items-center gap-3"
            >
              <IoBed />
              <p>4 Bedrooms</p>
            </div>
            <div
              data-aos="zoom-in-left"
              className="flex hover:text-primary items-center gap-3"
            >
              <FaBath />
              <p>2 Bathrooms</p>
            </div>
            <div
              data-aos="zoom-in-right"
              className="flex hover:text-primary items-center gap-3"
            >
              <IoCarSportSharp />
              <p>1 Carport</p>
            </div>
            <div
              data-aos="zoom-in-left"
              className="flex py-3 hover:text-primary items-center gap-3"
            >
              <GiStairs />
              <p>2 Floors</p>
            </div>
          </div>
        </div>
        <hr className="w-[70%]" />
        <div className="flex w-full pt-5 md:max-w-[70%] justify-between">
          <div data-aos="fade-right" className="flex gap-3  items-center">
            <img src={seller1} />
            <div className="flex flex-col">
              <p className="font-lexend font-medium text-primary">
                Dianne Russell
              </p>
              <p className="text-xs text-fadeblue font-lexend">
                Managing Director
              </p>
            </div>
          </div>
          <button
            data-aos="fade-left"
            className="flex items-center font-lexend text-sm gap-2 hover:bg-skyblue hover:text-primary hover:scale-105  text-white bg-green rounded-full px-3"
          >
            <MdCall />
            Contact Now
          </button>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="flex-1 md:w-[50%] flex items-center justify-end w-full"
      >
        <img src={LetsTourImg} className="h-[100%]  object-cover" />
      </div>
    </div>
  );
};

export default LetsTour;
