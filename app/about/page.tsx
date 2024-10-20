// app/about/page.tsx
"use client";

import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-600 flex flex-col items-center py-10 text-white">
      <h2 className="text-6xl font-bold mb-6 animate-bounce">EUNI wiki</h2>
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-xl mb-4">WELCOME TO EUNI WIKI!</p>
        <p className="text-lg mb-6">Hello! Let me introduce myself!</p>
        <p className="text-lg mb-6">This is my profile</p>
      </div>

      {/* 동영상 섹션 */}
      <div className="max-w-4xl mx-auto mb-10">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <Link
          href="/about/biography"
          className="relative block bg-white text-blue-600 px-8 py-4 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-blue-200 rounded-xl opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
          <h3 className="text-2xl font-semibold z-10">Biography</h3>
        </Link>

        <Link
          href="/about/hobbies"
          className="relative block bg-white text-blue-600 px-8 py-4 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-green-200 rounded-xl opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
          <h3 className="text-2xl font-semibold z-10">Hobbies</h3>
        </Link>

        <Link
          href="/about/profile"
          className="relative block bg-white text-blue-600 px-8 py-4 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-yellow-200 rounded-xl opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
          <h3 className="text-2xl font-semibold z-10">Profile</h3>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
