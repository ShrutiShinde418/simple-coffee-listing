import React, { Fragment } from "react";
import "./App.css";
import bgCafe from "./assets/bg-cafe.jpg";
import { Box, Stack, Container, Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  return (
    <Fragment>
      <Container maxW="7xl" bg="brand.darkGray" centerContent="true">
        <Stack spacing={3}>
          <Text fontSize="3xl" color="brand.white">
            Our collection
          </Text>
          <Text fontSize="xl" color="brand.gray">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </Text>
          <ButtonGroup>
            <Button bgColor="brand.gray" color="brand.white">
              All Products
            </Button>
            <Button bgColor="brand.darkGray" color="brand.white">
              Available Now
            </Button>
          </ButtonGroup>
        </Stack>
        <CoffeeCard />
      </Container>
    </Fragment>
  );
}

export default App;
