import "../App.css";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import ProjectListData from "../data/ProjectsListData";

function ProjectsList() {
  return (
    <>
      <Flex direction={"column"} gap={"3"}>
        {ProjectListData.map((project) => (
          <Card
            style={{ maxWidth: 500, borderColor: "grey", padding: "10px" }}
            key={project.index}
          >
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
              <Text>{project.description}</Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </>
  );
}

export default ProjectsList;
