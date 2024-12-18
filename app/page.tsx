import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-400 flex flex-col items-center justify-center text-white px-4">
      <div className="flex items-center justify-center space-x-8">
        {/* Left Side (Text) */}
        <div className="flex flex-col items-start space-y-6 max-w-3xl">
          <h2 className="text-5xl font-extrabold drop-shadow-lg mb-4 animate-pulse transition duration-500 ease-in-out transform hover:scale-105">
            Welcome to EUNI world
          </h2>
          <p className="text-lg text-left mb-6 drop-shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            안녕하세요. 중부대학교 정보보호학전공{" "}
            <span className="font-semibold">고은이</span> 입니다.
          </p>
          <section className="text-left space-y-6">
            <div className="flex gap-4 mt-6">
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

        {/* Right Side (Image) */}
        <div className="flex justify-center cursor-pointer">
          <Link href="/contact">
            <Image
              src="/images/profile.jpg"
              alt="Profile picture of 고은이"
              width={250} // 사진 크기 조정
              height={250} // 사진 크기 조정
              className="rounded-full border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
