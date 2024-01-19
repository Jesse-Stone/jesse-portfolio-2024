import { Flex, Text } from "@radix-ui/themes";
import "../App.css";
import { motion, useScroll, useSpring } from "framer-motion";

function Timeline() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  return (
    <>
      <Flex justify={"between"} style={{ width: "50%" }}>
        <Text size={"5"} weight={"light"}>
          Projects
        </Text>
        <Text size={"5"} weight={"light"}>
          Content
        </Text>
        <Text size={"5"} weight={"light"}>
          Career
        </Text>
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
