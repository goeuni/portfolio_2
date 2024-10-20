"use client";
import Link from "next/link";
import { useState } from "react";

const BiographyPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredEventIndex, setHoveredEventIndex] = useState<number | null>(
    null
  );
  const images = [
    "/images/kindergarten.jpg",
    "/images/birth.jpg",
    "/images/elementary.jpg",
    "/images/middle_school.jpg",
    "/images/high_school.jpg",
    "/images/university.jpg",
  ];

  const timelineEvents = [
    {
      year: "2004",
      title: "탄생",
      description: "2004년 05월 09일에 탄생!",
    },
    {
      year: "2011",
      title: "한울유치원 졸업",
      description: "유치원 최고 인싸!",
    },
    {
      year: "2017",
      title: "신일초등학교 졸업",
      description: "평화주의자",
    },
    {
      year: "2020",
      title: "신일중학교 졸업",
      description: "인생 꿀잼 시기",
    },
    {
      year: "2023",
      title: "저동고등학교 졸업",
      description: "미술부 체육부",
    },
    {
      year: "2023",
      title: "중부대학교 입학",
      description: "정보보호학 전공, 진로 고민 중~",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 py-10 flex">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentImage]}
            alt="Biography Images"
            className="w-full h-100 object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 flex justify-between items-center p-4">
            <button
              onClick={prevImage}
              className="bg-white text-purple-600 rounded-full p-2 hover:bg-gray-200 transition duration-300"
            >
              &#8249; {/* Left Arrow */}
            </button>
            <button
              onClick={nextImage}
              className="bg-white text-purple-600 rounded-full p-2 hover:bg-gray-200 transition duration-300"
            >
              &#8250; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold text-center text-white mb-10">
          My Biography
        </h2>
        <div className="border-l-4 border-white pl-4">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-10">
              <div className="absolute -left-5 w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600">
                {event.year}
              </div>
              <div
                className="ml-8"
                onMouseEnter={() => setHoveredEventIndex(index)}
                onMouseLeave={() => setHoveredEventIndex(null)}
              >
                <h3 className="text-xl font-semibold text-white cursor-pointer">
                  {event.title}
                </h3>
                {hoveredEventIndex === index && (
                  <p className="text-lg text-white mt-2 transition-opacity duration-300">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/about"
          className="mt-8 block text-blue-200 underline hover:text-blue-400 transition duration-300 transform hover:-translate-y-1 text-center"
        >
          Back to About Me
        </Link>
      </div>
    </div>
  );
};

export default BiographyPage;
