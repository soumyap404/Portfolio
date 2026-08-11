import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { KineticText as Newtext } from "../components/Newtext";

const About = () => {
  const grind2Container = useRef(null);
  return (
    <section id="about" className="c-space section-spaceing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-72 mt-12">
        {/* {grid 1} */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hola, I'm SOUMYA PRAMANIK</p>
            <p className="subtext">
              For the past two years, I've been passionate about crafting
              engaging frontend experiences using modern web technologies.
              Today, I'm focused on backend development, APIs, and databases,
              with the goal of building secure, scalable, and impactful
              full-stack applications.
            </p>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
          </div>
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grind2Container}
            className="flex items-center justify-center w-full h-full"
          >
            {/* <p className="flex items-end text-5xl text-gray-400">
              CODE IS CRAFT
            </p> */}
            <Newtext
              text="CODE IS CRAFT"
              className="flex items-end text-5xl text-gray-400"
            />
            <Card
              style={{ rotate: "3deg", top: "8%", left: "87%" }}
              image="assets/logos/tailwind.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              image="assets/logos/bootstrap.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "40%", left: "85%" }}
              image="assets/logos/opencv.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "10deg", bottom: "65%", left: "5%" }}
              image="assets/logos/vs code.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "10deg", bottom: "10%", left: "85%" }}
              image="assets/logos/HTML5.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "5%" }}
              image="assets/logos/typescript.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "50%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "64%" }}
              image="assets/logos/c++.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/java-script.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "-55deg", top: "20%", left: "70%" }}
              image="assets/logos/python.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "35deg", top: "5%", left: "35%" }}
              image="assets/logos/Java.png"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "20%" }}
              image="assets/logos/react.png"
              containerRef={grind2Container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Open Horizons</p>
            <p className="subtext">
              Available for internships and collaborative projects. I enjoy
              working with teams to build high-quality, scalable applications,
              solve real-world problems, and continuously grow as a developer.
            </p>
            <figure className="absolute left-[80%] top-[80%] -translate-x-1/2 -translate-y-1/2">
              <Globe />
            </figure>
          </div>
        </div>
        <div className="grid-special-color grid-4 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/20">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-visible ">
            <p className="text-center font-black headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText font-black">Teck Stack</p>
            <p className="subtext">
              {" "}
              <br></br>I specialize in a variety of programming languages,
              frameworks, and tools to build modern, responsive, and scalable
              web applications. I'm passionate about creating intuitive user
              experiences and writing clean, efficient, and maintainable code.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full inset-s-[45%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
