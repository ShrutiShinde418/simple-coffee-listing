import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import {
  Stack,
  Container,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const [drinksCollection, setDrinksCollection] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await response.json();
      console.log(data);
      setDrinksCollection(data);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <Container
        maxW="7xl"
        bg="brand.darkGray"
        centerContent="true"
        minH="100vh"
      >
        <Stack spacing={3} textAlign="center" mx={5}>
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
        <Grid templateColumns="repeat(3, 1fr)" gap="2rem">
          {drinksCollection.length > 0 &&
            drinksCollection.map((drink) => {
              return (
                <GridItem key={drink.id}>
                  <CoffeeCard
                    title={drink.name}
                    isPopular={drink.popular}
                    price={drink.price}
                    image={drink.image}
                    rating={drink.rating}
                    votes={drink.votes}
                  />
                </GridItem>
              );
            })}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default App;
