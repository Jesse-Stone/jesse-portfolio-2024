import "../App.css";

import { motion, useScroll, useSpring } from "framer-motion";

function Timeline() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  return (
    <motion.div
      id="navbar-progress"
      animate={{
        backgroundColor: "#ff00dd",
      }}
      style={{
        scaleX: scaleX,
      }}
    />
  );
}

export default Timeline;
