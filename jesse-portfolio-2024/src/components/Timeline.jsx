/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@radix-ui/themes";
import "../App.css";
import { motion } from "framer-motion";
import { useRef } from "react";

function Timeline(props) {
  const blogView = props.blogView;
  const projectView = props.projectView;
  const careerView = props.careerView;
  const ref = useRef(null);

  return (
    <>
      <motion.div
        style={{
          // transform: projectView && !blogView ? "none" : "translateX(-200px)",
          opacity: projectView && !blogView ? 1 : 0.3,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Text size={"5"} weight={"bold"}>
          Projects
        </Text>
      </motion.div>
      <motion.div
        style={{
          // transform: blogView ? "none" : "translateX(-200px)",
          opacity: blogView ? 1 : 0.3,
          transition: "all .5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Text size={"5"} weight={"bold"}>
          Blogs
        </Text>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          transform: careerView ? "none" : "translateX(-200px)",
          opacity: careerView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <Text size={"5"} weight={"bold"}>
          Career
        </Text>
      </motion.div>
    </>
  );
}

export default Timeline;
