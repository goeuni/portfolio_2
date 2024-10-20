// app/projects/page.tsx
"use client"; // 클라이언트 컴포넌트로 선언

import Link from "next/link"; // Link 컴포넌트 가져오기

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project One",
      description: "Crawlers for dark web tracking and analysis",
      link: "/projects/project-one", // 각 프로젝트의 상세 페이지로 링크
      image: "/images/project.jpg",
      details:
        "This project was Developing crawl to collect onion sites using tor browser to track and analyze cybercrime on the dark web.",
    },
    {
      title: "Project Two",
      description: "NOT yet",
      link: "/projects/project-two",
      image: "/images/project2.jpg",
      details: "NOT yet",
    },
    {
      title: "Project Three",
      description: "NOT yet",
      link: "/projects/project-three",
      image: "/images/project3.jpg",
      details: "NOT yet",
    },
    {
      title: "Project Four",
      description: "NOT yet",
      link: "/projects/project-four",
      image: "/images/project4.jpg",
      details: "NOT yet",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 flex flex-col items-center py-10 text-white">
      <h2 className="text-6xl font-bold mb-8 animate-pulse">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <a className="inline-block bg-indigo-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-indigo-500">
                  View Project
                </a>
              </div>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-center">
                  {project.details}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
