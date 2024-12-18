import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center justify-center text-white px-4 py-10">
      {/* Header Section */}
      <header className="text-center mb-6">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg tracking-wider">
          Contact Me
        </h2>
      </header>

      {/* Contact Information Section */}
      <div className="space-y-6 w-full max-w-md">
        {/* Email */}
        <div className="flex items-center justify-center space-x-6 bg-opacity-40 bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
          <FaEnvelope className="text-4xl text-purple-300 transform transition-all hover:scale-110" />
          <p className="text-2xl">goeuni0509@gmail.com</p>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-center space-x-6 bg-opacity-40 bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
          <FaGithub className="text-4xl text-purple-300 transform transition-all hover:scale-110" />
          <a
            href="https://github.com/goeuni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-purple-300 transition-all duration-300 transform hover:scale-110"
          >
            github.com/goeuni
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-sm opacity-80">
        <p>&copy; 2024 고은이 | All rights reserved.</p>
      </footer>
    </div>
  );
}
