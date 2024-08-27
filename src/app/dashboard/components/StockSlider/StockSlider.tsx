"use client";

import stockList from "./stockList";
import StockItem from "./StockItem";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { IoIosArrowForward, IoIosArrowBack } from "@/utils/icons";

const StockSlider = () => {
  return (
    <div>
      <div className="mb-5 text-xl text-semiblack">My Protofilo</div>
      <div className="relative rounded border border-borderwhite bg-white text-black shadow-sm">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          slidesPerView={1}
          spaceBetween={20}
          draggable={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {stockList.map((item) => (
            <SwiperSlide key={item.name} className="cursor-grab">
              <StockItem
                name={item.name}
                image={item.image}
                total_return={item.total_return}
                total_share={item.total_share}
                data={item.data}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev swiper-button-disabled absolute top-1/2 z-50 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-borderwhite bg-borderwhite text-semiblack">
          <IoIosArrowBack size={20} />
        </button>

        <button className="swiper-button-next swiper-button-disabled absolute right-0 top-1/2 z-50 flex size-8 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-borderwhite bg-borderwhite text-semiblack">
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};
export default StockSlider;
