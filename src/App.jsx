import { Fragment, useEffect, useState } from "react";
import "./App.css";
import {
  Stack,
  Container,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import CoffeeCard from "./components/CoffeeCard";
import bgImage from "./assets/bg-cafe.jpg";

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
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minH="100vh"
        bgImage={bgImage}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgColor="brand.black"
      >
        <Container
          maxW="6xl"
          bg="brand.darkGray"
          centerContent={true}
          padding="6em"
          borderRadius="1.05rem"
          marginBottom="4em"
          marginTop="12%"
        >
          <Stack spacing={3} textAlign="center" mx={5}>
            <Text fontSize="3xl" color="brand.white" fontWeight="semibold">
              Our collection
            </Text>
            <Text fontSize="xl" color="brand.gray" marginBottom={4}>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginBottom={12}
            >
              <ButtonGroup>
                <Button bgColor="brand.deepGray" color="brand.white">
                  All Products
                </Button>
                <Button bgColor="brand.darkGray" color="brand.white">
                  Available Now
                </Button>
              </ButtonGroup>
            </Box>
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
                      available={drink.available}
                    />
                  </GridItem>
                );
              })}
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}

export default App;
