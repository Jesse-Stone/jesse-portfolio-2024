import { Flex, Text } from "@radix-ui/themes";
import "../App.css";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  return (
    <>
      {console.log(isInView)}
      <Flex justify={"between"} style={{ width: "50%" }}>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Text size={"5"} weight={"bold"}>
            Projects
          </Text>
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Text size={"5"} weight={"bold"}>
            Content
          </Text>
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Text size={"5"} weight={"bold"}>
            Career
          </Text>
        </motion.div>
      </Flex>
      <motion.div
        id="navbar-progress"
        animate={{
          backgroundColor: "#ff00dd",
        }}
        style={{
          scaleX: scaleX,
        }}
      />
    </>
  );
}

export default Timeline;
