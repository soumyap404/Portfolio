import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "./Flipwords";
import { KineticText as Newtext } from "./Newtext";
import { ShimmerButton } from "./Button";

const HeroText = () => {
  const words = ["Innovative", "Secure", "Effective", "Modern"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* {desktop view} */}
      <motion.div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-3xl  font-bold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Hi i'm Soumya
        </motion.h1>

        <motion.div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-black  text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {" "}
            <Newtext text="A Developer" className="text-5xl font-black" />
            <Newtext text="Powered By Code" className="text-5xl font-black" />
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Innovative", "Secure", "Effective", "Modern"]}
              className="text-8xl font-bold text-blue-400"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-black"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            {" "}
            Web Solutions
          </motion.p> 
          <motion.div>
          <ShimmerButton
            className="
              mt-8 
              font-black
              text-white
              border border-cyan-400/40
              bg-cyan-500/10
              shadow-[0_0_20px_rgba(34,211,238,0.2)]
              transition-all duration-300
              hover:bg-cyan-400/20
              hover:border-cyan-300
              hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
              hover:scale-105
              active:scale-95
              
            "
            shimmerColor="#38bdf8"
            onClick={() => {
              const resumeUrl = "../public/resume.pdf";
              const fallbackUrl = "/resume.html";
              const isPdf =
                typeof window !== "undefined" &&
                window.location.href.includes("resume");
              window.open(
                isPdf ? fallbackUrl : resumeUrl,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            My Resume <img
    src="../public/assets/logos/eye.png"
    alt="PDF"
   className="from_left w-6 h-6 ml-3"
  />
          </ShimmerButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* {mobile view} */}
      <div className="flex flex-col space-y-1 md:hidden">
        <motion.p
          className="text-3xl font-bold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Hi, I'M SOUMYA
        </motion.p>
        <motion.p
          className="text-5xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
        >
          Building
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={words}
            className="text-7xl font-black text-blue-400"
          />
        </motion.div>
        <motion.p
          className="text-4xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Solutions
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroText;
