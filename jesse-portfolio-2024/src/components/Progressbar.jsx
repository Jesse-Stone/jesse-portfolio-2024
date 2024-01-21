import { Box } from "@radix-ui/themes";
import { motion, useScroll, useSpring } from "framer-motion";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });
  const scaleX2 = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 60,
  });
  const scaleX3 = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 70,
  });
  return (
    <>
      <Box>
        <Box style={{ width: "100%" }}>
          <motion.div
            id="navbar-progress"
            animate={{
              backgroundColor: "#DF2A63",
            }}
            style={{
              scaleX: scaleX,
            }}
          />
        </Box>
        <Box style={{ width: "100%" }}>
          <motion.div
            id="navbar-progress"
            animate={{
              backgroundColor: "#DF2A63",
            }}
            style={{
              scaleX: scaleX2,
            }}
          />
        </Box>
        <Box style={{ width: "100%" }}>
          <motion.div
            id="navbar-progress"
            animate={{
              backgroundColor: "#DF2A63",
            }}
            style={{
              scaleX: scaleX3,
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default ProgressBar;
