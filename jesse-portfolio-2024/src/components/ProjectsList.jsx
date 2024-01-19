/* eslint-disable react/prop-types */
import "../App.css";
import { Card, Flex, Text } from "@radix-ui/themes";
import ProjectListData from "../data/ProjectsListData";
import { motion } from "framer-motion";

function ProjectsList() {
  return (
    <>
      <Flex direction={"column"} gap={"3"}>
        {ProjectListData.map((project, index) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.9 }}
            key={index}
          >
            <Card style={{ borderColor: "grey", padding: "10px" }}>
              <Flex direction={"column"} gap={"2"}>
                <Text
                  size={"1"}
                  style={{
                    fontWeight: "900",
                    letterSpacing: "4px",
                    fontFamily: ["Josefin Sans", "sans-serif"],
                  }}
                >
                  {project.languages.toUpperCase()}
                </Text>
                <Text size={"6"} weight={"bold"}>
                  {project.name}
                </Text>
                <Text size="1" style={{ color: "grey", fontWeight: "800" }}>
                  {project.description}
                </Text>
              </Flex>
            </Card>
          </motion.div>
        ))}
      </Flex>
    </>
  );
}

export default ProjectsList;
