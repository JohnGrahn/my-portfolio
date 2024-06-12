import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center mx-4 my-8">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 flex justify-center">
          <img
            src="https://via.placeholder.com/300x300"
            alt="Profile"
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center">
          <h1 className="text-5xl font-bold mb-8">Contact Me</h1>
          <p className="mb-8">
            If you have any questions, inquiries, or would like to collaborate,
            feel free to reach out to me through any of the following channels:
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon icon="mdi:linkedin" className="mr-2" />
              LinkedIn
            </a>
            <a
              href="mailto:your-email@example.com"
              className="btn btn-primary"
            >
              <Icon icon="mdi:email" className="mr-2" />
              Email
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Icon icon="mdi:github" className="mr-2" />
              GitHub
            </a>
            <Link to="/resume" className="btn btn-primary">
              <Icon icon="mdi:file-document" className="mr-2" />
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
