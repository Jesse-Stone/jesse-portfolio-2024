import "../App.css";
import * as Avatar from "@radix-ui/react-avatar";
import { Box, Flex, Text } from "@radix-ui/themes";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import jesseAvatar from "../assets/JesseAvatar.jpeg";

function Hero() {
  return (
    <>
      <Flex>
        <Box mr={"auto"} style={{ maxWidth: "700px", position: "sticky" }}>
          <Text className="Hero__Name" size={"9"}>
            Jesse Stone
          </Text>
          <Flex direction={"column"}>
            <Text size={"9"} mt={"2"} style={{ fontWeight: "300" }}>
              Experienced web developer specializing in{" "}
              <span className="Gradient">ReactJS</span>
              <span>.</span>
            </Text>
            <Text
              size={"5"}
              weight={"light"}
              mt={"4"}
              style={{ opacity: "90%" }}
            >
              Some bullshit about how great I am, all the made up crap I can do
              and have done, and also how big my yammer is - I will deliver
              results with said yammer that I mentioned preveriously.
            </Text>
          </Flex>
          <Flex direction={"row"} align={"center"} gap={"4"} mt={"3"}>
            <Avatar.Root className="AvatarRoot">
              <Avatar.Image
                className="AvatarImage"
                src={jesseAvatar}
              ></Avatar.Image>
            </Avatar.Root>
            <Flex align={"center"} gap={"5"}>
              <Flex align={"center"} gap={"2"}>
                <GitHubLogoIcon style={{ height: "20px", width: "20px" }} />
                <Text>Github</Text>
                <ExternalLinkIcon />
              </Flex>
              <Flex align={"center"} gap={"2"}>
                <LinkedInLogoIcon style={{ height: "20px", width: "20px" }} />
                <Text>LinkedIn</Text>
                <ExternalLinkIcon />
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box>TEST</Box>
      </Flex>
    </>
  );
}

export default Hero;
