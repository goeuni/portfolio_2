"use client";
import dynamic from "next/dynamic";

// Biography 페이지를 동적으로 임포트
const Biography = dynamic(() => import("./biography/page"));
const Hobbies = dynamic(() => import("./hobbies/page"));
const Profile = dynamic(() => import("./profile/page"));

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

      {/* 동적 페이지 임포트: 스크롤을 통해 바로 보이게 하기 */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="space-y-40">
          {" "}
          {/* 각 섹션 간의 공간을 넓힘 */}
          {/* Biography 페이지 */}
          <div id="biography" className="pb-64">
            <Biography />
          </div>
          {/* Hobbies 페이지 */}
          <div id="hobbies" className="pb-64">
            <Hobbies />
          </div>
          {/* Profile 페이지 */}
          <div id="profile" className="pb-64">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
