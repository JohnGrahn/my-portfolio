# my-portfolio

A modern, responsive personal portfolio website built with React and Vite. This project showcases your work, projects, resume, and blog posts with elegant Markdown rendering and syntax highlighting.

## Features

- React-based single-page application
- Blog post rendering from Markdown files
- Syntax highlighting for code blocks
- Responsive design for various screen sizes
- Fast refresh and hot module replacement (HMR)
- Markdown enhancements with remark plugins (GFM, slug, TOC)
- Resume section with Markdown and PDF viewing options
- Projects showcase with live demo and GitHub links
- Docker deployment support

## Technologies Used

- React
- Vite
- ReactMarkdown
- react-syntax-highlighter
- remark-gfm
- remark-slug
- remark-toc
- Tailwind CSS
- DaisyUI
- Iconify
- Docker

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/my-portfolio.git cd my-portfolio
```

2. Install dependencies:
```
npm install
```

## Usage

To run the development server:

```
npm run dev
```


To build for production:
```
npm run build
```

## Docker Deployment

1. Build the Docker image:
``` 
docker build -t my-portfolio .
```
2. Run the Docker container:
```
docker run -p 3000:3000 my-portfolio
```
The application will be available at http://localhost:3000

## Project Structure

- `src/`: Source files
- `components/`: React components
 - `BlogPost.jsx`: Component for rendering blog posts
- `pages/`: Page components
 - `Projects.jsx`: Projects showcase page
 - `Resume.jsx`: Resume page component
- `public/`: Public assets
 - `posts/`: Markdown files for blog posts
 - `Resume.md`: Markdown file for resume
 - `JohnGrahnResume.pdf`: PDF version of the resume
- `package.json`: Project dependencies and scripts
- `vite.config.js`: Vite configuration
- `Dockerfile`: Docker configuration for deployment

## Customization

1. Add your blog posts as Markdown files in the `public/posts/` directory.
2. Modify the `BlogPost` component in `src/components/BlogPost.jsx` to customize the rendering of your blog posts.
3. Update the `Resume.md` file in the `public/` directory with your personal information and experience.
4. Replace `JohnGrahnResume.pdf` in the `public/` directory with your own PDF resume.
5. Customize the `Projects.jsx` component to showcase your own projects.
6. Update the styling by modifying the Tailwind CSS classes or adding custom CSS.

## Resume

The resume section is implemented in the `Resume.jsx` component located in the `src/pages/` directory. It offers two viewing options:

1. A Markdown-rendered version of the resume content
2. An embedded PDF version of the resume

Key features of the Resume component:

- Toggle switch to alternate between Markdown and PDF views
- Fetches resume content from a Markdown file (`/Resume.md`)
- Uses ReactMarkdown with remark-gfm plugin for rendering
- Responsive design for various screen sizes

To customize your resume:

1. Update the `/public/Resume.md` file with your personal information and experience
2. Replace `/public/JohnGrahnResume.pdf` with your own PDF resume
3. Modify the `Resume.jsx` component if you need to change the layout or functionality

## Projects

The projects section is implemented in the `Projects.jsx` component. It displays a grid of project cards, each featuring:

- Project image
- Project title and description
- Live demo and GitHub links
- Technology icons used in the project

To add or modify projects, update the `Projects.jsx` file in the `src/pages/` directory.


