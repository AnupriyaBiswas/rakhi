import React from "react";
import Slider from "react-slick";
import memories from "../data/memories.json";

export default function MemoryLane() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="py-12 bg-yellow-100">
      <h2 className="text-3xl font-bold text-center mb-8">Memory Lane</h2>
      <div className="max-w-2xl mx-auto">
        <Slider {...settings}>
          {memories.map((mem, idx) => (
            <div key={idx} className="text-center">
              <img
                src={mem.image}
                alt="memory"
                className="rounded-lg shadow-lg mx-auto max-h-96 object-cover"
              />
              <p className="mt-4 text-lg">{mem.caption}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
