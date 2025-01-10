import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import "./LifeAtAlpha.css"; 

const LifeAtAlpha = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current
      .filter((section) => section) // Filter out null/undefined
      .forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current
        .filter((section) => section) // Filter out null/undefined
        .forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = [
    {
      title: "Annual Trip",
      description:
        "Our annual trips are an opportunity to unwind, explore new destinations, and strengthen team bonds. It’s a time to relax and recharge amidst nature’s beauty.",
      slides: ["trip-a1", "trip-a2", "trip-a3"],
      align: "left",
      background: "bg-annual-trip", // Unique background class
    },
    {
      title: "New Year Celebration",
      description:
        "Ringing in the new year with joy, laughter, and togetherness! Our New Year celebrations are filled with excitement, festivities, and cherished moments.",
      slides: ["newyear1", "newyear2", "newyear3", "newyear4", "newyear5", "newyear6", ], // Added 5 more slides
      align: "right",
      background: "bg-new-year", // Unique background class
    },
    {
      title: "Christmas Dinner",
      description:
        "Christmas dinners at Alpha are a blend of festive cheer, delicious food, and memorable moments shared with our extended family.",
      slides: ["christmas1", "christmas2", "christmas3"],
      align: "left",
      background: "bg-christmas", // Unique background class
    },
    {
      title: "Weekend Bash",
      description:
        "Our weekend bashes are all about letting loose and having fun! Whether it’s karaoke nights or BBQ parties, there’s something for everyone to enjoy.",
      slides: ["weekend1", "weekend2", "weekend3"],
      align: "right",
      background: "bg-weekend", // Unique background class
    },
    {
      title: "Sports Day",
      description:
        "Our Sports Day is an event filled with energy and enthusiasm. Team spirit, healthy competition, and unforgettable memories make it an eagerly anticipated occasion.",
      slides: ["sports1", "sports2", "sports3", "sports4", "sports5", "sports6"], // Added 3 more slides
      align: "left",
      background: "bg-sports-day", // Unique background class
    },
  ];
  

  return (
    <section className="life-at-alpha-container">
      {/* Header Section */}
      <div className="life-at-alpha-header">
        <div className="header-overlay1">
          <h1 className="header-title1">Life at Alpha</h1>
        </div>
      </div>

      <div className="life-at-alpha-wrapper">
        <div className="life-intro-section">
          <p className="life-intro-description">
            Life at Alpha is all about creating a vibrant and engaging
            environment where work and fun go hand in hand. From exciting events
            to team-building activities, we ensure our employees enjoy every
            moment of their journey with us.
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`life-section-block ${
              section.align === "right" ? "reverse-layout" : ""
            } ${section.background} hidden-section`}
          >
            <div className="life-section-content">
              <h3 className="life-section-heading">{section.title}</h3>
              <p className="life-section-description">{section.description}</p>
            </div>
            <div className="life-section-slider">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop
                className="alpha-swiper-container"
              >
                {section.slides.map((slide, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={`alpha-swiper-slide ${slide}`}
                  ></SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeAtAlpha;
