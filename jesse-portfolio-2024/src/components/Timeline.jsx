/* eslint-disable react/prop-types */
import { Text } from "@radix-ui/themes";
import "../App.css";
import { motion } from "framer-motion";

function Timeline(props) {
  const blogView = props.blogView;
  const projectView = props.projectView;
  const careerView = props.careerView;
  const musicView = props.musicView;

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
          opacity: careerView && !musicView ? 1 : 0.3,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Text size={"6"} weight={"bold"}>
          Career
        </Text>
      </motion.div>
      <motion.div
        style={{
          opacity: musicView ? 1 : 0.3,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Text size={"6"} weight={"bold"}>
          Music
        </Text>
      </motion.div>
    </>
  );
}

export default Timeline;
