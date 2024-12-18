import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>GO</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-purple-600">EUNI</h1>
            <nav className="flex space-x-4">
              <a
                href="/"
                className="text-lg text-gray-700 hover:text-purple-600 transition duration-300"
              >
                Home
              </a>

              {/* About 메뉴 - 드롭다운 */}
              <div className="relative group">
                <a
                  href="/about"
                  className="text-lg text-gray-700 hover:text-purple-600 transition duration-300"
                >
                  About
                </a>
                {/* 드롭다운 메뉴 */}
                <div className="absolute left-0 hidden mt-2 space-y-2 bg-white shadow-lg group-hover:block group-focus-within:block">
                  <a
                    href="#biography"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-300"
                  >
                    Biography
                  </a>
                  <a
                    href="#hobbies"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-300"
                  >
                    Hobbies
                  </a>
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-300"
                  >
                    Profile
                  </a>
                </div>
              </div>

              <a
                href="/projects"
                className="text-lg text-gray-700 hover:text-purple-600 transition duration-300"
              >
                Projects
              </a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6 mt-24">{children}</main>
      </body>
    </html>
  );
}
