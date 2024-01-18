import { Container, Flex, Text } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import "../App.css";
import * as Avatar from "@radix-ui/react-avatar";
import jesseAvatar from "/Users/jessestone/Jesse-Portfolio-2024/jesse-portfolio-2024/src/assets/JesseAvatar.jpeg";

function Hero() {
  return (
    <>
      <Container size={"3"}>
        <Flex justify={"center"} direction={"column"} align={"center"}>
          <Avatar.Root className="AvatarRoot">
            <Avatar.Image
              className="AvatarImage"
              src={jesseAvatar}
            ></Avatar.Image>
          </Avatar.Root>

          <Text size={"9"} align={"center"} style={{ fontWeight: "900" }}>
            Experienced web developer specializing in{" "}
            <span className="Gradient">ReactJS</span>
            <span>.</span>
          </Text>
          <Text
            size={"5"}
            align={"center"}
            weight={"light"}
            mt={"4"}
            style={{ opacity: "90%" }}
          >
            Some bullshit about how great I am, all the made up crap I can do
            and have done, and also how big my yammer is - I will deliver
            results with said yammer that I mentioned preveriously.
          </Text>

          <Flex
            justify={"space-between"}
            align={"center"}
            mt={"3"}
            width={"50%"}
          >
            <GitHubLogoIcon style={{ height: "35px", width: "35px" }} />
            <LinkedInLogoIcon style={{ height: "35px", width: "35px" }} />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default Hero;
