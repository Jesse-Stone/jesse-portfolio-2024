/* eslint-disable react/prop-types */
import { Flex, Text } from "@radix-ui/themes";
import "../App.css";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Timeline(props) {
  const blogView = props.blogView;
  const projectView = props.projectView;
  const careerView = props.careerView;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  return (
    <>
      {console.log(scaleX.get())}
      <Flex justify={"between"} style={{ width: "40%" }}>
        <motion.div
          style={{
            transform: projectView ? "none" : "translateX(-200px)",
            opacity: projectView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Text size={"5"} weight={"bold"}>
            Projects
          </Text>
        </motion.div>
        <motion.div
          style={{
            transform: blogView ? "none" : "translateX(-200px)",
            opacity: blogView ? 1 : 0,
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
            transform: careerView ? "none" : "translateX(-200px)",
            opacity: careerView ? 1 : 0,
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
