import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Events = () => {
  // Tum apni real images yahan add karna
  const cards = [
    { img: "/mnt/data/Capture.PNG", title: "Event 1" },
    { img: "/mnt/data/Capture.PNG", title: "Event 2" },
    { img: "/mnt/data/Capture.PNG", title: "Event 3" },
    { img: "/mnt/data/Capture.PNG", title: "Event 4" },
    { img: "/mnt/data/Capture.PNG", title: "Event 5" },
  ];

  return (
    <section className="section-padding bg-white">
      <h2 className="text-center text-2xl font-bold mb-6">News & Events</h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {cards.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">

                {/* Image */}
                <img
                  src={item.img}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Latest update from our campus events.
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
