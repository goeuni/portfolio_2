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
    <div className="min-h-screen bg-gray-100 py-10 px-4 lg:px-20 flex flex-col items-center">
      {/* 이미지 슬라이더 */}
      <div className="w-full max-w-3xl mb-12">
        <div className="relative w-full h-[700px] overflow-hidden rounded-xl shadow-xl border-4 border-gray-300">
          <img
            src={images[currentImage]}
            alt="Biography Images"
            className="w-full h-full object-contain transition-transform duration-500" // object-contain을 사용해 이미지가 부모 컨테이너에 맞게 조정
          />
          <div className="absolute inset-0 flex justify-between items-center p-4">
            <button
              onClick={prevImage}
              className="bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>

      {/* 타임라인 */}
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          My Biography
        </h2>
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative group border-b-2 border-gray-300 pb-4"
              onMouseEnter={() => setHoveredEventIndex(index)}
              onMouseLeave={() => setHoveredEventIndex(null)}
            >
              <div className="absolute left-[-40px] top-0 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl shadow-xl group-hover:bg-purple-600 transition duration-300">
                {event.year}
              </div>
              <div className="ml-20">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                {hoveredEventIndex === index && (
                  <p className="text-lg text-gray-600 mt-2 opacity-100 transition-opacity duration-300">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 돌아가기 링크 */}
        <Link
          href="/about"
          className="mt-10 block text-blue-600 underline hover:text-blue-800 transition duration-300 transform hover:-translate-y-1 text-center"
        >
          Back to About Me
        </Link>
      </div>
    </div>
  );
};

export default BiographyPage;
