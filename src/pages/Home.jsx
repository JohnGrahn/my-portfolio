import React from "react";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center text-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="py-6">
            Hi, I'm a software developer with a passion for creating innovative and efficient solutions. With expertise in various programming languages and frameworks, I strive to deliver high-quality applications that meet the needs of users and businesses alike.
          </p>
          <p className="py-6">
            Take a look around my portfolio to see some of my recent projects and learn more about my skills and experience. If you have any questions or would like to discuss potential collaborations, feel free to get in touch.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="Coding on laptop"
            className="max-w-lg rounded-lg shadow-2xl"
          />
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
            <li>Database design and management with SQL and NoSQL databases</li>
            <li>RESTful API development and integration</li>
            <li>Performance optimization and scalability considerations</li>
          </ul>
          
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Full Stack Development"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-4 my-8 items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold mb-4">Cloud Infrastructure &amp; Architecture</h2>
          <div className="flex space-x-4 mb-4">
            <Icon icon="devicon:azure" width="48" height="48" />
            <Icon icon="devicon:docker" width="48" height="48" />
            <Icon icon="devicon:terraform" width="48" height="48" />
            <Icon icon="devicon:kubernetes" width="48" height="48" />
          </div>
          <p className="mb-4">
            I have hands-on experience in designing and implementing cloud infrastructure and architectures on Microsoft Azure. With a deep understanding of Azure services, Docker, Terraform, and Kubernetes, I help businesses leverage the power of the cloud to achieve their goals.
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
            <li>Designing and deploying Azure infrastructure using Azure Resource Manager (ARM) templates, Terraform, and Azure CLI</li>
            <li>Implementing and managing Azure virtual machines, virtual networks, and storage solutions</li>
            <li>Architecting scalable and fault-tolerant systems using Azure services like Azure Load Balancer and Azure Availability Sets</li>
            <li>Implementing serverless architectures using Azure Functions and Azure Logic Apps</li>
            <li>Designing and managing containerized applications with Docker and Azure Kubernetes Service (AKS)</li>
            <li>Automating infrastructure provisioning and configuration management using Terraform and Azure DevOps</li>
            <li>Implementing CI/CD pipelines using Azure DevOps and Azure Pipelines</li>
          </ul>
          
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Cloud Infrastructure & Architecture"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
