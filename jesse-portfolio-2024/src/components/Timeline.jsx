/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@radix-ui/themes";
import "../App.css";
import { motion } from "framer-motion";
import { useRef } from "react";

function Timeline(props) {
  const blogView = props.blogView;
  const projectView = props.projectView;
  const careerView = props.careerView;

  return (
    <>
      <motion.div
        style={{
          opacity: projectView && !blogView ? 1 : 0.3,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Text size={"6"} weight={"bold"}>
          Projects
        </Text>
      </motion.div>
      <motion.div
        style={{
          opacity: blogView && !careerView ? 1 : 0.3,
          transition: "all .5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Text size={"6"} weight={"bold"}>
          Blogs
        </Text>
      </motion.div>
      <motion.div
        style={{
          opacity: careerView ? 1 : 0.3,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Text size={"6"} weight={"bold"}>
          Career
        </Text>
      </motion.div>
    </>
  );
}

export default Timeline;
