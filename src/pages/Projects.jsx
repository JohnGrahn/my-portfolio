import React from "react";
import { Icon } from "@iconify/react";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="aspect-video">
            <img 
              src="/images/projects/portfolio.png" 
              alt="Portfolio Project" 
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Portfolio</h2>
            <p>The website you are on right now.</p>
            <div className="card-actions justify-end">
              <a href="https://johngrahn.com" className="btn btn-primary">
                Live Demo
              </a>
              <a href="https://github.com/JohnGrahn/my-portfolio" className="btn btn-outline">
                <Icon icon="mdi:github" className="mr-2" />
                GitHub
              </a>
            </div>
            <div className="mt-4 flex space-x-2">
              <Icon icon="devicon:react" width="24" height="24" />
              <Icon icon="devicon:javascript" width="24" height="24" />
              <Icon icon="devicon:html5" width="24" height="24" />
              <Icon icon="devicon:css3" width="24" height="24" />
              <Icon icon="devicon:tailwindcss" width="24" height="24" />
              <Icon icon="devicon:vitejs" width="24" height="24" />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="h-64 overflow-hidden">
            <img 
              src="/images/projects/spaceinvaders.png" 
              alt="Space Invaders Project" 
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Space Invaders Clone</h2>
            <p>My take on the classic Space Invaders game.</p>
            <div className="card-actions justify-end">
              <a href="https://spaceinvaders.johngrahn.com" className="btn btn-primary">
                Live Demo
              </a>
              <a href="https://github.com/JohnGrahn/space-invaders" className="btn btn-outline">
                <Icon icon="mdi:github" className="mr-2" />
                GitHub
              </a>
            </div>
            <div className="mt-4 flex space-x-2">
              <Icon icon="devicon:javascript" width="24" height="24" />
              <Icon icon="devicon:html5" width="24" height="24" />
              <Icon icon="devicon:css3" width="24" height="24" />
              <Icon icon="devicon:nodejs" width="24" height="24" />
              <Icon icon="devicon:express" width="24" height="24" />
              <Icon icon="devicon:postgresql" width="24" height="24" />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="h-64 overflow-hidden">
            <img 
              src="https://via.placeholder.com/400x225" 
              alt="Project 3" 
              className="w-full h-full object-cover"
            />
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