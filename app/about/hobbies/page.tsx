"use client";
import { useState, useEffect } from "react";

const HobbiesPage = () => {
  const [hoveredHobbyIndex, setHoveredHobbyIndex] = useState<number | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hobbies = [
    {
      title: "드라마 영화 시청",
      description: "좋아하는 배우 필모 정주행 하기",
      images: [
        "/images/movie1.jpeg",
        "/images/movie2.jpeg",
        "/images/movie3.jpeg",
        "/images/movie4.jpeg",
        "/images/movie5.jpeg",
        "/images/movie6.jpeg",
        "/images/movie7.jpeg",
        "/images/movie8.jpeg",
        "/images/movie9.jpeg",
        "/images/movie10.jpeg",
      ],
    },
    {
      title: "운동",
      description: "중학생 때 시작해서 복싱 5-6년차",
      images: [
        "/images/sports1.jpg",
        "/images/sports2.jpg",
        "/images/sports3.jpg",
        "/images/sports4.jpg",
      ],
    },
    {
      title: "그림 그리기",
      description: "유치원 때 부터 고등학교 졸업할 때 까지 미술 상장",
      images: [
        "/images/paint1.jpg",
        "/images/paint2.jpg",
        "/images/paint3.jpg",
      ],
    },
  ];

  useEffect(() => {
    if (hoveredHobbyIndex !== null) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) =>
            (prevIndex + 1) % hobbies[hoveredHobbyIndex].images.length
        );
      }, 2000); // 2초마다 이미지 전환

      return () => clearInterval(interval);
    }
  }, [hoveredHobbyIndex, hobbies]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-cyan-600 py-10 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-white mb-10">My Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105"
            onMouseEnter={() => {
              setHoveredHobbyIndex(index);
              setCurrentImageIndex(0);
            }}
            onMouseLeave={() => setHoveredHobbyIndex(null)}
          >
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              {hobby.title}
            </h3>
            <p className="text-gray-700">{hobby.description}</p>
            {hoveredHobbyIndex === index && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
                <img
                  src={hobby.images[currentImageIndex]}
                  alt={hobby.title}
                  className="w-100 h-100 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbiesPage;
