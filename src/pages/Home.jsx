import React from "react";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center ">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-5xl font-bold text-center">Welcome to My Portfolio</h1>
          <p className="py-6">
            Hi, I'm a software developer with a passion for creating innovative and efficient solutions. With expertise in various programming languages and frameworks, I strive to deliver high-quality applications that meet the needs of users and businesses alike.
          </p>
          <p className="py-6">
            Take a look around my portfolio to see some of my recent projects and learn more about my skills and experience. If you have any questions or would like to discuss potential collaborations, feel free to get in touch.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
        <div className="w-full h-64 md:h-80 lg:h-96 max-w-xl mx-auto overflow-hidden rounded-lg shadow-2xl">

    <img
      src="/images/terminal.avif"
      alt="Coding on laptop"
      className="w-full h-full object-cover"
    />
  </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold mb-4">Full Stack Development</h2>
          <div className="flex space-x-4 mb-4">
            <Icon icon="devicon:html5" width="48" height="48" />
            <Icon icon="devicon:css3" width="48" height="48" />
            <Icon icon="devicon:react" width="48" height="48" />
            <Icon icon="devicon:git" width="48" height="48" />
            <Icon icon="devicon:python" width="48" height="48" />
          </div>
          <p className="mb-4">
            I have extensive experience in full-stack development, utilizing a range of technologies and frameworks to build robust and scalable applications. From front-end user interfaces to back-end server logic and database management, I cover the entire development stack.
          </p>
          <p className="mb-4">
            My expertise includes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Front-end development with HTML, CSS, JavaScript, and modern frameworks like React and Angular</li>
            <li>Back-end development with Node.js, Express.js, and server-side frameworks</li>
            <li>Database design and management with SQL databases like PostgreSQL and MySQL</li>
            <li>RESTful API development and integration</li>
            <li>Performance optimization and scalability considerations</li>
          </ul>
          
        </div>
        <div className="md:w-1/2 flex justify-center">
        <div className="w-full h-64 md:h-80 lg:h-96 max-w-xl mx-auto overflow-hidden rounded-lg shadow-2xl">


         <img
            src="/images/fullstack.jpg"            
            alt="Full Stack Development"
            className="w-full h-full object-cover"
           
          />
        </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center">
      <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
  <h2 className="text-3xl font-bold mb-4">Cloud Infrastructure &amp; Architecture</h2>
  <div className="flex space-x-4 mb-4">
    <Icon icon="devicon:azure" width="48" height="48" />
    <Icon icon="devicon:oracle" width="48" height="48" />
    <Icon icon="devicon:docker" width="48" height="48" />
  </div>
  <p className="mb-4">
    I have hands-on experience in designing and implementing cloud infrastructure and architectures on Microsoft Azure and Oracle Cloud. With a deep understanding of cloud services and Docker, I help businesses leverage the power of the cloud to achieve their goals.
  </p>
  <p className="mb-4">
    I hold the following Azure certifications:
  </p>
  <ul className="list-disc list-inside mb-4">
    <li>AZ-104 Azure Administrator Associate</li>
    <li>AZ-305 Azure Solutions Architect</li>
  </ul>
  <p className="mb-4">
    My expertise includes:
  </p>
  <ul className="list-disc list-inside mb-4">
    <li>Designing and deploying cloud infrastructure using Azure Resource Manager (ARM) templates, Azure CLI, and Oracle Cloud Infrastructure (OCI) CLI</li>
    <li>Implementing and managing virtual machines, virtual networks, and storage solutions in Azure and Oracle Cloud</li>
    <li>Architecting scalable and fault-tolerant systems using cloud-native services</li>
    <li>Implementing serverless architectures using Azure Functions and Oracle Cloud Functions</li>
    <li>Designing and managing containerized applications with Docker and cloud container services</li>
    <li>Automating infrastructure provisioning and configuration management using Azure DevOps and Oracle Cloud DevOps</li>
    <li>Implementing CI/CD pipelines using Azure DevOps, Azure Pipelines, and Oracle Cloud DevOps</li>
  </ul>
</div>

        <div className="md:w-1/2 flex justify-center">
        <div className="w-full h-64 md:h-80 lg:h-96 max-w-xl mx-auto overflow-hidden rounded-lg shadow-2xl">


          <img
            src="/images/cloud.jpg"
            alt="Cloud Infrastructure & Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
