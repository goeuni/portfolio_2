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
        <header className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-purple-600">EUNI</h1>
            <nav className="space-x-4">
              <a
                href="/"
                className="text-lg text-gray-700 hover:text-purple-600 transition duration-300"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-lg text-gray-700 hover:text-purple-600 transition duration-300"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-lg text-gray-700 hover:text-purple-600 transition duration-300"
              >
                Projects
              </a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
        <footer className="bg-white shadow-inner py-4">
          <div className="container mx-auto text-center text-gray-600">
            <p>© 2024 웹 서버 보안 프로그래밍. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
