// app/projects/project-one/page.tsx
"use client"; // 클라이언트 컴포넌트로 선언

const ProjectOnePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col items-center justify-center text-white py-10 transition-all duration-300">
      <h2 className="text-5xl font-bold mb-6 animate-pulse">Project One</h2>
      <div className="max-w-4xl mx-auto text-center p-6 bg-white text-gray-800 rounded-lg shadow-lg">
        <img
          src="/images/project1.jpg"
          alt="Project One"
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-lg mb-4">
          Tor 브라우저에서 onion 사이트를 수집하여 다크 웹에서 일어나는 사이버
          범죄를 추적하고 분석하는 프로젝트를 진행했습니다.
        </p>
        <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
        <p className="text-gray-700">Python, Flask, Tor browser, .onion</p>
        <h3 className="text-xl font-semibold mb-2 mt-4">Key Features</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Tor 브라우저 사용</li>
          <li>onion 라우팅</li>
          <li>크롤링과 분석</li>
        </ul>
      </div>
      <a
        href="/projects"
        className="mt-6 text-blue-600 underline hover:text-blue-800 transition duration-300"
      >
        Back to Projects
      </a>
    </div>
  );
};

export default ProjectOnePage;
