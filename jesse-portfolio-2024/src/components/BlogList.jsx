import { Card, Flex, Grid, Text } from "@radix-ui/themes";
import BlogListData from "../data/BlogListData";
import { motion } from "framer-motion";

function BlogList() {
  return (
    <>
      <Flex direction={"column"} gap={"3"}>
        <Grid columns={"2"} gap={"4"}>
          {BlogListData.map((blog, index) => (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.9 }}
              key={index}
            >
              <Card
                style={{
                  height: "200px",
                  width: "200px",
                  borderColor: "grey",
                  padding: "30px",
                }}
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
                    {blog.name.toUpperCase()}
                  </Text>
                  <Text size="1" style={{ color: "grey", fontWeight: "800" }}>
                    {blog.date}
                  </Text>
                  <Text size="4" style={{ fontWeight: "800" }}>
                    {blog.title}
                  </Text>
                </Flex>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default BlogList;
