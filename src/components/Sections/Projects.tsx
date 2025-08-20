import React from "react";
import Card from "../util/Card";
import data from "../../data.json";

const Projects = () => {
  const { projects } = data;
  return (
    <div>
      <h1 className="mb-3 text-2xl">Projects</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
        {projects.map((project) => (
          <Card
            className="flex justify-center align-middle flex-col bg-[#3b393934] shadow-inner shadow-[#000000] rounded-xl p-4"
            description
            key={project.title}
            img={project.file}
            title={project.title}
            size={300}
            contents={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
