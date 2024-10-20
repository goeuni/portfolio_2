import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 flex flex-col items-center justify-center text-white px-4">
      <h2 className="text-5xl font-extrabold drop-shadow-lg mb-6 animate-pulse transition duration-500 ease-in-out transform hover:scale-105">
        Welcome to EUNI world
      </h2>
      <p className="text-lg max-w-xl text-center mb-8 drop-shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        안녕하세요. 중부대학교 정보보호학전공{" "}
        <span className="font-semibold">고은이</span> 입니다.
      </p>
      <Image
        src="/images/profile.jpg"
        alt="Profile picture of [Your Name]"
        width={200}
        height={200}
        className="rounded-full mb-8 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <section className="text-center space-y-4">
        <h3 className="text-3xl font-bold drop-shadow-lg">고은이</h3>
        <p className="text-base max-w-lg mx-auto drop-shadow-sm">포트폴리오</p>
        <div className="flex gap-4 justify-center mt-6">
          <Link
            href="/about"
            className="bg-white text-purple-700 px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="bg-white text-purple-700 px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            View Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
