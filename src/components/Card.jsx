import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      
      style={style}
      animate={{
        y: [0, -10, 0],
      }}
       transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  ) : (
    <motion.div
      className="absolute w-48 cursor-grab rounded-full bg-storm px-1 py-4 text-center text-xl font-extralight ring ring-gray-700"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  );
};

export default Card;
