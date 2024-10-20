"use client";
import Link from "next/link";
import { useState } from "react";

const PersonalityPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/personality1.jpg",
    "/images/personality2.jpg",
    "/images/personality3.jpg",
  ];

  const traits = {
    name: "고은이",
    birthdate: "2004년 05월 09일",
    major: "정보보호학전공",
    hobbies: ["드라마 영화", "운동", "그림"],
    mbti: "INFP or INTP",
    interests: ["디지털 포렌식", "건강", "반려동물"],
    characteristics: ["차분함", "호기심 많음", "긍정적"],
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 to-blue-500 py-10 flex">
      {/* 왼쪽 이미지 슬라이드 */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            src={images[currentImage]}
            alt="Personality Images"
            className="w-full h-100 object-cover transition-transform duration-500"
            onMouseEnter={nextImage}
          />
          <div className="absolute inset-0 flex justify-between items-center p-4">
            <button
              onClick={prevImage}
              className="bg-white text-green-600 rounded-full p-2 hover:bg-gray-200 transition duration-300"
            >
              &#8249; {/* Left Arrow */}
            </button>
            <button
              onClick={nextImage}
              className="bg-white text-green-600 rounded-full p-2 hover:bg-gray-200 transition duration-300"
            >
              &#8250; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>

      {/* 오른쪽 정보 섹션 */}
      <div className="flex-1 flex flex-col justify-center items-start p-10">
        <h2 className="text-4xl font-bold text-white mb-6">내 정보</h2>
        <div className="bg-white rounded-lg shadow-md p-6 text-gray-800 w-full">
          <p className="mb-2">
            <strong>이름:</strong> {traits.name}
          </p>
          <p className="mb-2">
            <strong>생년월일:</strong> {traits.birthdate}
          </p>
          <p className="mb-2">
            <strong>전공:</strong> {traits.major}
          </p>
          <p className="mb-2">
            <strong>취미:</strong> {traits.hobbies.join(", ")}
          </p>
          <p className="mb-2">
            <strong>MBTI:</strong> {traits.mbti}
          </p>
          <p className="mb-2">
            <strong>관심 분야:</strong> {traits.interests.join(", ")}
          </p>
          <p className="mb-2">
            <strong>특징:</strong> {traits.characteristics.join(", ")}
          </p>
        </div>
        <Link
          href="/about"
          className="mt-8 text-blue-200 underline hover:text-blue-400 transition duration-300"
        >
          Back to About Me
        </Link>
      </div>
    </div>
  );
};

export default PersonalityPage;
