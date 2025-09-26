import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/nikPP.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 leading-tight"
          >
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">
            Nikhil Singh
          </h2>

          {/* Typing Effect */}

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-black">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Software Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About Description */}
          <p className="text-base sm:text-lg md:text-lg text-black-400 mb-10 mt-8 leading-relaxed">
            I graduated with a B.Tech degree from Chitkara University in 2024. I completed 6 months of training and internship in Full Stack Development using the MERN stack at CETPA Infotech, where I gained hands-on experience building responsive and scalable web applications. Since then, I have been improving my skills through self-learning and personal projects. I’m excited to apply my knowledge and grow as a developer by working on real-world projects.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1SNaTu609StSOrVeijr_jT6kUwuy5MaOv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
            aria-label="Download CV"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side - Tilted Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Profile of Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
