import React, { useState, useEffect } from "react";
import { Testimonies } from "../constants/constants";
import Carousel from "./Carousel";
import { FaStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Testimonies[0], Testimonies[1], Testimonies[2]];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-3 flex flex-col py-16">
      <div className="flex flex-col items-center mb-6  gap-4 justify-center">
        <p data-aos="fade-left" className="font-lexend text-sm text-orange">
          See Our Reviews
        </p>
        <p
          data-aos="fade-right"
          className="text-3xl font-lexend text-primary text-center font-bold"
        >
          What Our Users Say About Us
        </p>
      </div>

      <div className="relative flex items-center py-6 justify-center">
        {Testimonies.map((tesimonty, index) => (
          <div
            key={tesimonty.id}
            className={`w-full transform transition-transform duration-500 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-40 scale-90"
            }`}
          >
            <TestimonialCard
              key={tesimonty.id}
              title={tesimonty.title}
              image={tesimonty.picture}
              desc={tesimonty.desc}
              buyerphoto={tesimonty.buyer_picture}
              buyername={tesimonty.buyer_name}
              buyertitle={tesimonty.buyer_title}
              rating={tesimonty.rating}
            />
          </div>
        ))}

        <div className="absolute bottom-[-50%] flex space-x-2">
          {Testimonies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 bg-primary rounded-full focus:outline-none ${
                index === currentSlide ? "opacity-100" : "scale-90 opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  title,
  image,
  desc,
  buyerphoto,
  buyername,
  buyertitle,
  rating,
}) => {
  return (
    <div className=" overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[100%] object-cover object-center"
      />
      <div className="absolute shadow-md bottom-[-50%] w-[90%] z-99 left-[05%] rounded-xl bg-white p-4">
        <h2 className="text-xl font-lexend text-primary font-semibold mb-2">
          {title}
        </h2>
        <p className="text-fadeblue opacity-80 font-lexend text-xs mb-4">
          {desc}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={buyerphoto}
              alt={buyername}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-lexend text-primary font-semibold">
                {buyername}
              </p>
              <p className="text-xs text-fadeblue font-lexend">{buyertitle}</p>
            </div>
          </div>
          <div className="flex text-sm gap-2 items-center mt-2">
            <p className=" text-orange font-lexend font-semibold">{rating}</p>
            <FaStar className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

// const TestimonialCard = ({
//   title,
//   image,
//   desc,
//   buyerphoto,
//   buyername,
//   buyertitle,
//   rating,
// }) => (
//   <div className="flex flex-col items-center justify-center z-30 relative">
//     <div className="w-full">
//       <img src={image} />
//     </div>
//     <div
//       id="testimony-card"
//       className="w-[90%] z-50 absolute bg-white shadow-md rounded-xl p-3 flex flex-col gap-4"
//     >
//       <div className="flex flex-col gap-2">
//         <p className="font-lexend text-xl font-medium text-primary">{title}</p>
//         <p className="font-lexend opacity-70 text-xs text-fadeblue">{desc}</p>
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="flex gap-4 items-center">
//           <img src={buyerphoto} className="w-[35px]" />
//           <div className="flex flex-col">
//             <p className="font-lexend text-sm text-primary">{buyername}</p>
//             <p className="font-lexend text-xs text-fadeblue opacity-70">
//               {buyertitle}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center font-lexend text-primary gap-1">
//           <FaStar className="text-orange" />
//           {rating}
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default Testimonials;
