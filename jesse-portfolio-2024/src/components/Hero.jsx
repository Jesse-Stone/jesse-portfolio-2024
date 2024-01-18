import "../App.css";
import { Flex, Text } from "@radix-ui/themes";

function Hero() {
  return (
    <>
      <Flex direction={"column"} style={{ maxWidth: "700px", height: "500px" }}>
        <Text className="Hero__Name" size={"9"}>
          Jesse Stone
        </Text>
        <Flex direction={"column"}>
          <Text size={"9"} mt={"2"} style={{ fontWeight: "300" }}>
            Software Engineer at <span className="Gradient">Ibotta</span>
            <span>.</span>
          </Text>
          <Text size={"5"} weight={"light"} mt={"4"} style={{ opacity: "90%" }}>
            Some bullshit about how great I am, all the made up crap I can do
            and have done, and also how big my yammer is - I will deliver
            results with said yammer that I mentioned previously.
          </Text>
        </Flex>
      
      </Flex>
    </>
  );
}

export default Hero;