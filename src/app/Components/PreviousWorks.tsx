// components/PreviousWorks.tsx

import React from "react";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string; // optional (for demo/case study link)
};

interface PreviousWorksProps {
  projects: Project[];
}

const PreviousWorks: React.FC<PreviousWorksProps> = ({ projects }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Proven Enterprise Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Over the years, we’ve built powerful, scalable software solutions that
          have transformed businesses across various industries. Here are a few
          of our flagship projects:
        </p>
      </div>

      <div className="space-y-10 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <div className="md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover md:h-full"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousWorks;
