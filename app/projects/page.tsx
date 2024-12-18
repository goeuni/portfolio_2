"use client"; // 클라이언트 컴포넌트로 선언

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project One",
      description: "Crawlers for dark web tracking and analysis",
      link: "https://www.notion.so/9a2d561e0b044c66ac7370231b94718e?v=0138c601ef8941a49342abb8cd777d0c",
      image: "/images/project.jpg",
      details:
        "This project was Developing crawl to collect onion sites using tor browser to track and analyze cybercrime on the dark web.",
    },
    {
      title: "Project Two",
      description: "portfolio1",
      link: "https://vercel.com/goeunis-projects/portfolio",
      image: "/images/project2.jpg",
      details: "web personal project portfolio1",
    },
    {
      title: "Project Three",
      description: "clerk-api",
      link: "https://vercel.com/goeunis-projects/clerk-api",
      image: "/images/project3.jpg",
      details: "clerk-api",
    },
    {
      title: "Project Four",
      description: "hc-jdemo",
      link: "https://vercel.com/goeunis-projects/hc-jdemo",
      image: "/images/project4.jpg",
      details: "hc-jdemo",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 flex flex-col items-center py-10 text-white">
      <h2 className="text-6xl font-bold mb-8 animate-pulse">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
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
                <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-indigo-500">
                  View Project
                </div>
              </div>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white font-bold text-center">
                  {project.details}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
