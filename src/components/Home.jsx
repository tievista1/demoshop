import React from "react";
import logo from "../assets/logo.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'

export const Home = () => {
    return (
        <div
  id="home"
  className="w-full min-h-screen pt-24 pb-24"
  style={{ backgroundColor: "#4d0b0d" }}
>
  <div
    className="
      flex flex-col lg:flex-row
      w-full
      px-4 sm:px-10 lg:px-50
      py-10
      justify-center
      gap-6 lg:gap-10
    "
  >
    <div className="w-full h-screen">
      <div className="flex justify-center items-center w-full h-full">
        <h1 className="text-4xl font-bold text-white">TieVista in Progress, Coming Soon!</h1>
      </div>
    </div>
    </div>
    </div>

    );
};
