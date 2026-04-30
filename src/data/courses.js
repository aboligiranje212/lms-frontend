// src/data/courses.js
const courses = [
    {
      id: 1,
      title: "React Basics",
      instructor: "John Doe",
      description: "Learn fundamentals of React",
      lessons: [
        { id: 1, title: "Introduction", content: "React is a JavaScript library for building UI." },
        { id: 2, title: "Components", content: "Components are reusable building blocks." },
        { id: 3, title: "JSX", content: "JSX allows writing HTML in JavaScript." }
      ]
    },
    {
      id: 2,
      title: "Advanced React",
      instructor: "Jane Smith",
      description: "Hooks and performance optimization",
      lessons: [
        { id: 1, title: "useState", content: "Manage component state easily." },
        { id: 2, title: "useEffect", content: "Handle side effects in components." },
        { id: 3, title: "useContext", content: "Global state without props drilling." }
      ]
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      instructor: "Michael Lee",
      description: "Core JavaScript concepts",
      lessons: [
        { id: 1, title: "Variables", content: "Learn var, let, and const." },
        { id: 2, title: "Functions", content: "Reusable blocks of code." },
        { id: 3, title: "Promises", content: "Handle async operations." }
      ]
    },
    {
      id: 4,
      title: "HTML & CSS",
      instructor: "Sarah Wilson",
      description: "Build beautiful web pages",
      lessons: [
        { id: 1, title: "HTML Basics", content: "Structure of web pages." },
        { id: 2, title: "CSS Styling", content: "Add styles and layouts." },
        { id: 3, title: "Flexbox", content: "Modern layout system." }
      ]
    },
    {
      id: 5,
      title: "Node.js Basics",
      instructor: "David Brown",
      description: "Backend development with Node",
      lessons: [
        { id: 1, title: "Introduction to Node", content: "JavaScript runtime environment." },
        { id: 2, title: "Modules", content: "Reusable code in Node." },
        { id: 3, title: "Express.js", content: "Build APIs easily." }
      ]
    }
  ];
  
  export default courses;