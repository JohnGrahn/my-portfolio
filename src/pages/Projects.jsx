import React from "react";
import { Icon } from "@iconify/react";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://via.placeholder.com/400x225" alt="Project 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project 1</h2>
            <p>A brief description of Project 1.</p>
            <div className="card-actions justify-end">
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>
              <a href="#" className="btn btn-outline">
                <Icon icon="mdi:github" className="mr-2" />
                GitHub
              </a>
            </div>
            <div className="mt-4 flex space-x-2">
              <Icon icon="devicon:javascript" width="24" height="24" />
              <Icon icon="devicon:html5" width="24" height="24" />
              <Icon icon="devicon:css3" width="24" height="24" />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://via.placeholder.com/400x225" alt="Project 2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project 2</h2>
            <p>A brief description of Project 2.</p>
            <div className="card-actions justify-end">
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>
              <a href="#" className="btn btn-outline">
                <Icon icon="mdi:github" className="mr-2" />
                GitHub
              </a>
            </div>
            <div className="mt-4 flex space-x-2">
              <Icon icon="devicon:python" width="24" height="24" />
              <Icon icon="cib:django" width="24" height="24" />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://via.placeholder.com/400x225" alt="Project 3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project 3</h2>
            <p>A brief description of Project 3.</p>
            <div className="card-actions justify-end">
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>
              <a href="#" className="btn btn-outline">
                <Icon icon="mdi:github" className="mr-2" />
                GitHub
              </a>
            </div>
            <div className="mt-4 flex space-x-2">
              <Icon icon="devicon:java" width="24" height="24" />
              <Icon icon="devicon:spring" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
