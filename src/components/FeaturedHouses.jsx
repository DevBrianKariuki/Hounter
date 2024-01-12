import React, { useState, useEffect } from "react";
import { FaHouse } from "react-icons/fa6";
import { MdVilla } from "react-icons/md";
import { MdApartment } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FeatureHouses } from "../constants/constants";
import { FaFire } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedHouses = () => {
  const [active, setactive] = useState("Villa");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full sm:pl-20 pl-6 py-12 flex flex-col">
      <div className="flex justify-between flex-col md:flex-row sm:pr-20 pr-6 items-center">
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2">
            <p
              data-aos="fade-right"
              className="font-lexend text-xs text-orange"
            >
              Our Recommendation
            </p>
          </div>
          <h1
            data-aos="fade-left"
            className="text-3xl font-lexend font-bold text-primary"
          >
            Featured Houses
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            data-aos="fade-right"
            className={`${
              active === "House"
                ? "bg-greenbutton border-none text-green"
                : "text-neutral-400 border-neutral-400  text-sm"
            } py-2 px-4  flex gap-2 border-[1px] rounded-full items-center font-lexend `}
            onClick={() => setactive("House")}
          >
            <FaHouse />
            House
          </button>
          <button
            data-aos="fade-down"
            className={`${
              active === "Villa"
                ? "bg-greenbutton border-none text-green"
                : "text-neutral-400 border-neutral-400  text-sm"
            } py-2 px-4  flex gap-2 border-[1px] rounded-full items-center font-lexend `}
            onClick={() => setactive("Villa")}
          >
            <MdVilla />
            Villa
          </button>
          <button
            data-aos="fade-left"
            className={`${
              active === "Apartment"
                ? "bg-greenbutton border-none text-green"
                : "text-neutral-400 border-neutral-400  text-sm"
            } py-2 px-4  flex gap-2 border-[1px] rounded-full items-center font-lexend `}
            onClick={() => setactive("Apartment")}
          >
            <MdApartment />
            Apartment
          </button>
        </div>
        <div data-aos="fade-left" className="flex gap-3 items-center">
          <div className="rounded-full p-3 bg-neutral-300  flex items-center justify-center">
            <IoIosArrowBack />
          </div>
          <div className="rounded-full bg-green text-white  p-3 flex items-center justify-center">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="flex items-center overlow-x-auto gap-6 w-full my-6">
        {FeatureHouses.map((house) => (
          <FeatureCard
            photo={house.photo}
            key={house.id}
            title={house.title}
            price={house.price}
            sellerpic={house.sellerpic}
            icon={house.icon}
            category={house.category}
            seller={house.seller}
            location={house.location}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({
  photo,
  title,
  icon,
  price,
  seller,
  category,
  sellerpic,
  location,
}) => (
  <div
    data-aos="fade-up-right"
    className="flex w-[100%] hover:scale-105 cursor-pointer flex-col gap-2"
  >
    <div className="rounded-2xl relative w-full">
      <div
        className={` ${
          category === "Popular"
            ? "bg-[#FEE2E2] text-red-600"
            : "bg-[#D1FAE5] text-primary"
        }  absolute bottom-3 px-3 py-[5px] rounded-full left-4 gap-1 flex items-center`}
      >
        <div>{category === "Popular" ? <FaFire /> : <MdHome />}</div>
        <p className="font-lexend text-xs">{category}</p>
      </div>
      <img src={photo} id="enhanced-image" className="w-[100%] rounded-2xl" />
    </div>
    <div className="flex flex-col py-2">
      <p className="font-lexend hover:text-green font-bold text-primary text-lg">
        {title}
      </p>
      <p className="text-sm font-lexend text-fadeblue">{price}</p>
    </div>
    <div className="flex items-center  gap-2">
      <img
        src={sellerpic}
        className="rounded-full w-[40px] h-[40px]  object-cover"
      />
      <div className="flex flex-col">
        <p className="font-lexend font-medium text-primary text-sm">{seller}</p>
        <p className="text-fadeblue text-xs font-lexend">{location}</p>
      </div>
    </div>
  </div>
);

export default FeaturedHouses;
