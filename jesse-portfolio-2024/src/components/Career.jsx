import { Card, Flex, Grid } from "@radix-ui/themes";

function Career() {
  return (
    <>
      {/* <Flex direction={"column"}> */}
      <Grid columns={"1"}>
        <Card
          style={{
            height: "22rem",
            width: "auto",
            borderColor: "grey",
            padding: "1rem",
          }}
        >
          Fancy Resume Placeholder component that I'll need to write some stuff
          in to fill all the way for stuff Lorem Ipsum Expecto Patronum. Maybe
          put company logos here I dunno?
        </Card>
      </Grid>
      {/* </Flex> */}
    </>
  );
}
export default Career;
