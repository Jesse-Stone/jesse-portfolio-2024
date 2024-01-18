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
  );
}

export default AvatarLinks;
