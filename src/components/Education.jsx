import React from "react";
import CU from '../assets/Edu_logo/CU.png';
import sdaLogo from '../assets/Edu_logo/Dashmesh_logo.jpeg';

const education = [
  {
    id: 0,
    img: CU,
    school: "Chitkara University",
    date: "Aug 2020 - July 2024",
    grade: "8.77 CGPA",
    desc: "I completed my B.Tech in Computer Science and Engineering from Chitkara University in 2024. During my studies, I gained a strong foundation in core subjects like Data Structures, Algorithms, Computer Networks, and Web Technologies. I also participated in technical workshops and coding events, which helped enhance my practical skills and problem-solving abilities.",
    degree: "Bachelor of Engineering - B.Tech",
  },
  {
    id: 1,
    img: sdaLogo,
    school: "Shri Dashmesh Academy, Anandpur Sahib",
    date: "Apr 2018 - March 2019",
    grade: "66.50%",
    desc: "I completed my class 12 education from Shri Dashmesh Academy,Anandpur Sahib, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM ",
  },
  {
    id: 2,
    img: sdaLogo,
    school: "Shri Dashmesh Academy, Anandpur Sahib",
    date: "Apr 2016 - March 2017",
    grade: "81.7%",
    desc: "I completed my class 10 education from Shri Dashmesh Academy,Anandpur Sahib, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-800 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-black h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;