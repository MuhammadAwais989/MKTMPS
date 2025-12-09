import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySlider = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      title: "School Campus",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      title: "Classroom Learning",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop",
      title: "Science Lab",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7f60?w=400&h=300&fit=crop",
      title: "Sports Activities",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop",
      title: "Library",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop",
      title: "Cultural Events",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14 tracking-wide">
          Our Gallery
        </h2>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300">

                {/* Image */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-white text-lg font-semibold">
                    {img.title}
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

export default GallerySlider;
