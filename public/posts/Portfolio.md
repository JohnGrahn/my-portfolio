# Building My Portfolio Site: Lessons Learned and Professional Growth

## Introduction

As a software developer, having a strong online presence is crucial. A portfolio website serves as a digital showcase of your skills, projects, and professional journey. Recognizing this, I embarked on building my own portfolio site, an experience that not only enhanced my technical abilities but also fostered significant professional growth.

## Lessons Learned

This project provided a valuable opportunity to dive into various modern web technologies and hone my skills in several key areas:

### 1. Modern Web Technologies

I chose a technology stack that combined power, flexibility, and a visually appealing design aesthetic:

- **React**: This popular JavaScript library allowed me to build a dynamic and interactive user interface with reusable components, contributing to a cleaner and more maintainable codebase.
- **Vite**:  Vite served as the build tool and development server, providing lightning-fast hot module replacement (HMR) for a smooth and efficient development experience. 
- **Tailwind CSS**: This utility-first CSS framework expedited the styling process and ensured a responsive design across different screen sizes. 


The combination of these technologies resulted in a performant, visually appealing, and maintainable website.
#### React Code for Blog Functionality

A key aspect of my portfolio site is the blog section, which I implemented using React and Markdown. Here's a snippet of the code that handles fetching and rendering individual blog posts:

```javascript
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// ... other imports 

const BlogPost = () => {
  const { postId } = useParams();
  const [content, setContent] = useState("");
  // ...

  useEffect(() => {
    fetch(`/posts/${postId}.md`)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        // ... (Image handling)
      })
      .catch((error) => {
        console.error("Error fetching markdown file:", error);
      });
  }, [postId]);

  return (
    // ... (JSX for rendering the blog post)
      <ReactMarkdown
        remarkPlugins={[remarkSlug, remarkToc, remarkGfm]} 
        // ... (Code block handling)
      >
        {content}
      </ReactMarkdown>
    // ...
  );
};

export default BlogPost; 
```

This code demonstrates how React's `useEffect` hook is used to fetch the Markdown content for the requested blog post based on the `postId` from the URL. It then utilizes the `ReactMarkdown` component to render the Markdown into HTML, enhancing it with plugins like `remarkSlug`, `remarkToc`, and `remarkGfm` for a better user experience.


### 2. Responsive Design

Creating a mobile-friendly website is essential in today's world. I adopted a mobile-first approach, starting with the smallest screen size and progressively enhancing the layout for larger screens. Tailwind CSS's built-in responsive utilities proved invaluable for this, allowing me to easily adjust styles based on screen breakpoints.

### 3. Performance Optimization

Website performance plays a critical role in user experience. To ensure fast load times, I employed techniques such as image optimization and lazy loading. 

- **Image Optimization**: I compressed images using online tools to reduce their file sizes without compromising quality.
- **Lazy Loading**: I implemented lazy loading for images, delaying their loading until they are visible in the viewport. This significantly reduced initial page load times, particularly for image-heavy pages like the Blog.

To measure performance, I utilized Lighthouse, a powerful tool by Google Chrome that provides insights into various performance metrics.

### 4. Version Control and Deployment

Effective version control and deployment are essential for managing code changes and ensuring a smooth release process.

- **Git and GitHub**: I integrated Git and GitHub for version control, allowing me to track changes, collaborate with others (if needed), and revert to previous versions if necessary.
- **Docker**: To simplify deployment, I containerized the application using Docker. This created a portable and reproducible environment for the website, reducing dependencies and simplifying the deployment process.
- **Oracle Cloud VM**: I deployed the Docker container to an Oracle Cloud VM (Virtual Machine) instance. This provided a dedicated server environment for the website, giving me more control over server configurations and security settings.
- **Coolify and GitHub Webhooks**: To streamline the deployment workflow, I leveraged Coolify for automated Docker builds and set up GitHub webhooks to trigger these builds whenever new code is pushed to the repository. This allowed for a continuous integration and continuous deployment (CI/CD) pipeline, ensuring that the latest changes are automatically built and deployed to the live site.


## Applying These Skills Professionally

Working on this portfolio project has not only sharpened my technical skills but also fostered important professional qualities:

- **Problem-Solving**:  Encountering challenges throughout the development process forced me to think critically and find solutions. This strengthened my problem-solving abilities, a critical asset in any software development role. 
- **User Experience Focus**: Building a website with a user-centric design pushed me to consider the end-user experience. This focus on user experience is invaluable for creating user-friendly and inclusive applications.
- **Communication**:  Documenting the project and writing this blog post honed my technical communication skills, allowing me to effectively convey technical concepts and project details. 
- **Staying Current**: This project required me to stay up-to-date with the latest web technologies and trends, a crucial practice for remaining relevant in the ever-evolving world of software development.

## Conclusion

Building my portfolio site proved to be a transformative journey, blending technical learning with professional development. The project showcased my technical skills and highlighted my ability to learn new technologies, solve problems, and create a user-centric experience.
I invite you to explore my [portfolio website](https://johngrahn.com) to see the final result.
