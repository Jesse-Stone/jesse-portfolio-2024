import { Container, Flex, Text } from "@radix-ui/themes";
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
          </Text>
        </Flex>
      </Container>
    </>
  );
}

export default Hero;
