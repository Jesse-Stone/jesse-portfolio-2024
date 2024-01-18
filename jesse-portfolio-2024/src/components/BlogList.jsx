import { Card, Flex, Text } from "@radix-ui/themes";
import BlogListData from "../data/BlogListData";
import { motion } from "framer-motion";

function BlogList() {
  return (
    <>
      <Flex direction={"column"} gap={"3"}>
        {BlogListData.map((blog) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.9 }}
            key={blog.index}
          >
            <Card
              style={{ maxWidth: 500, borderColor: "grey", padding: "10px" }}
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
                <Text size={"6"} weight={"bold"}>
                  {blog.name}
                </Text>
                <Text size="1" style={{ color: "grey", fontWeight: "800" }}>
                  {blog.date}
                </Text>
              </Flex>
            </Card>
          </motion.div>
        ))}
      </Flex>
    </>
  );
}

export default BlogList;
