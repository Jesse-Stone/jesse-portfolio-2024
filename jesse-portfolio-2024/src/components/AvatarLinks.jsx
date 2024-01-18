import * as Avatar from "@radix-ui/react-avatar";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import jesseAvatar from "../assets/JesseAvatar.jpeg";

function AvatarLinks() {
  return (
    <Flex direction={"row"} align={"center"} gap={"4"} mt={"auto"}>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image className="AvatarImage" src={jesseAvatar}></Avatar.Image>
      </Avatar.Root>
      <Flex align={"center"} gap={"5"}>
        <Flex
          onClick={() =>
            window.open("https://github.com/Jesse-Stone/", "_blank")
          }
          align={"center"}
          gap={"2"}
          style={{ cursor: "pointer" }}
        >
          <GitHubLogoIcon style={{ height: "20px", width: "20px" }} />
          <Text>Github</Text>
          <ExternalLinkIcon />
        </Flex>
        <Flex
          onClick={() =>
            window.open("https://www.linkedin.com/in/jesse-c-stone/", "_blank")
          }
          align={"center"}
          gap={"2"}
          style={{ cursor: "pointer" }}
        >
          <LinkedInLogoIcon style={{ height: "20px", width: "20px" }} />
          <Text>LinkedIn</Text>
          <ExternalLinkIcon />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AvatarLinks;
