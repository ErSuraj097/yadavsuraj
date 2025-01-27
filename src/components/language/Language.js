import React from "react";
import "./language.css";

const Language = () => {
  const data = [
    {
      title: "Programming Languages",
      contents: ["Python", "C++", "Core Java"],
    },
    {
      title: "Frontend Development",
      contents: ["HTML/CSS", "JavaScript", "React", "Tailwind"],
    },
    {
      title: "Backend Development",
      contents: ["Node.js", "Express","Flask" ],
    },
    {
      title: "Database",
      contents: [ "NoSQL","MongoDB", "SQL",],
    },
    {
      title: "Data Science & Machine Learning",
      contents: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Streamlit", "Tkinter"],
    },
    {
      title: "Development Tools",
      contents: ["VS Code", "Postman", "GitHub", "Git", "NPM"],
    },
    {
      title: "Microsoft Office",
      contents: ["Excel", "Word", "PowerPoint"],
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
