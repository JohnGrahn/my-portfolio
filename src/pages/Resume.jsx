import React from "react";

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <h3>Work Experience</h3>
      <div style={{ marginBottom: "16px" }}>
        <h4>Software Engineer, ABC Company</h4>
        <h5>January 2020 - Present</h5>
        <ul>
          <li>
            Developed and maintained web applications using React and Node.js
          </li>
          <li>
            Collaborated with cross-functional teams to deliver high-quality
            software
          </li>
          <li>Implemented responsive and accessible user interfaces</li>
        </ul>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <h4>Web Developer, XYZ Agency</h4>
        <h5>June 2018 - December 2019</h5>
        <ul>
          <li>
            Built and maintained client websites using HTML, CSS, and JavaScript
          </li>
          <li>Optimized website performance and improved user experience</li>
          <li>Worked closely with designers to implement responsive layouts</li>
        </ul>
      </div>
      <h3>Education</h3>
      <div style={{ marginBottom: "16px" }}>
        <h4>Bachelor of Science in Computer Science</h4>
        <h5>University of Example, 2014 - 2018</h5>
      </div>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
};

export default Resume;
