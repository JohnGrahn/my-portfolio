import React from "react";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <div className="text-center max-w-md">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="py-6">
              Hi, I'm a software developer with a passion for creating
              innovative and efficient solutions. With expertise in various
              programming languages and frameworks, I strive to deliver
              high-quality applications that meet the needs of users and
              businesses alike.
            </p>
            <p className="py-6">
              Take a look around my portfolio to see some of my recent projects
              and learn more about my skills and experience. If you have any
              questions or would like to discuss potential collaborations, feel
              free to get in touch.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="Coding on laptop"
            className="max-w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center ">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Project 1</h2>
          <div className="flex justify-center space-x-4">
            <Icon icon="devicon:html5" width="48" height="48" />
            <Icon icon="devicon:css3" width="48" height="48" />
            <Icon icon="devicon:react" width="48" height="48" />
            <Icon icon="devicon:git" width="48" height="48" />
            <Icon icon="devicon:python" width="48" height="48" />
          </div>
          <p className="mb-4">
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Project 1"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Project 2</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Project 2"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
