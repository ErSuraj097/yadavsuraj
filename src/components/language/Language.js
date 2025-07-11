import React from "react";
import "./language.css";

const Language = () => {
  // const data = [
  //   {
  //     title: "Programming Languages",
  //     contents: ["Python", "C++", "Core Java"],
  //   },
  //   {
  //     title: "Frontend Development",
  //     contents: ["HTML/CSS", "JavaScript", "React", "Tailwind"],
  //   },
  //   {
  //     title: "Backend Development",
  //     contents: ["Node.js", "Express","Flask" ],
  //   },
  //   {
  //     title: "Database",
  //     contents: [ "NoSQL","MongoDB", "SQL",],
  //   },
  //   {
  //     title: "Data Science & Machine Learning",
  //     contents: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Streamlit", "Tkinter"],
  //   },
  //   {
  //     title: "Development Tools",
  //     contents: ["VS Code", "Postman", "GitHub", "Git", "NPM"],
  //   },
  //   {
  //     title: "Microsoft Office",
  //     contents: ["Excel", "Word", "PowerPoint"],
  //   },
  // ];

  const data = [
  {
    title: "Programming Languages",
    contents: ["Python", "C++", "Core Java", "JavaScript"],
  },
  {
    title: "Frontend Development",
    contents: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    contents: ["Node.js", "Express.js", "Flask", "FastAPI", "RESTful APIs"],
  },
  {
    title: "Databases",
    contents: ["MongoDB", "MySQL", "SQL"],
  },
  {
    title: "AI, ML & Deep Learning",
    contents: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      // "Seaborn",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "PyTorch",
      // "XGBoost",
      "Jupyter Notebook"
    ],
  },
  {
    title: "Generative AI & LLMs",
    contents: [
      "OpenAI (GPT)",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      // "Vector DBs (Pinecone, Chroma, FAISS)",
      "Prompt Engineering",
      "RAG (Retrieval Augmented Generation)",
      "Agent AI",
      // "Chain of Thought (CoT)",
      "Function Calling"
    ],
  },
  {
    title: "MLOps & Deployment",
    contents: ["Docker", "MLflow",  "Streamlit", "Streamlit Sharing", "FastAPI"],
  },
  {
    title: "Development & Version Control Tools",
    contents: ["VS Code", "Git", "GitHub", "Postman", "NPM"],
  },
  {
    title: "Productivity Tools",
    contents: ["Microsoft Excel", "Word", "PowerPoint"],
  },
];


  return (
    <section id="language" data-aos="fade">
      {data.map((item) => {
        return (
          <div className="language-box" key={item.title}>
            <h3>{item.title}</h3>

            <ul>
              {item.contents.map((content) => {
                return <li key={content}> {content}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Language;
