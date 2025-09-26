// src/components/Skills/Skills.jsx
import React from "react";
import Tilt from "react-parallax-tilt";

// 🔽 Import all logo assets
import htmlLogo from '../assets/skill_logo/html.png'
import cssLogo from "../assets/skill_logo/css.png";
// import sassLogo from "../assets/skill_logo/sass.png";
import javascriptLogo from "../assets/skill_logo/javascript.png";
import reactjsLogo from "../assets/skill_logo/reactjs.png";
// import angularLogo from "../assets/skill_logo/angular.png";
import reduxLogo from "../assets/skill_logo/redux.png";
// import nextjsLogo from "../assets/skill_logo/nextjs.png";
import tailwindcssLogo from "../assets/skill_logo/tailwindcss.png";
// import gsapLogo from "../assets/skill_logo/gsap.png";
import materialuiLogo from "../assets/skill_logo/materialui.png";
import bootstrapLogo from "../assets/skill_logo/bootstrap.png";

// import springbootLogo from "../assets/skill_logo/springboot.png";
import nodejsLogo from "../assets/skill_logo/nodejs.png";
import expressjsLogo from "../assets/skill_logo/express.png";
import mysqlLogo from "../assets/skill_logo/mysql.png";
import mongodbLogo from "../assets/skill_logo/mongodb.png";
import firebaseLogo from "../assets/skill_logo/firebase.png";
// import postgreLogo from "../assets/skill_logo/postgre.png";

// import cLogo from "../assets/skill_logo/c.png";
import cppLogo from "../assets/skill_logo/cpp.png";
import javaLogo from "../assets/skill_logo/java.png";
// import pythonLogo from "../assets/skill_logo/python.png";
// import csharpLogo from "../assets/skill_logo/csharp.png";
import typescriptLogo from "../assets/skill_logo/typescript.png";

import gitLogo from "../assets/skill_logo/git.png";
import githubLogo from "../assets/skill_logo/github.png";
import vscodeLogo from "../assets/skill_logo/vscode.png";
import postmanLogo from "../assets/skill_logo/postman.png";
// import mcLogo from "../assets/skill_logo/compass.png";
import vercelLogo from "../assets/skill_logo/vercel.png";
import netlifyLogo from "../assets/skill_logo/netlify.png";
import figmaLogo from "../assets/skill_logo/figma.png";




// 🔽 All Skills Info
const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      // { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      // { name: "Python", logo: pythonLogo },
      // { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

// 🔽 Skills Component
const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-black">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
