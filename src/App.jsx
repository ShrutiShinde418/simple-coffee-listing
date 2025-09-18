import { Fragment, useEffect, useState } from "react";
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
import containerBgImage from "./assets/vector.svg";

const buttons = [
  {
    id: 1,
    text: "All Products",
  },
  {
    id: 2,
    text: "Available Now",
  },
];

function App() {
  const [drinksCollection, setDrinksCollection] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [selectedButton, setSelectedButton] = useState("All Products");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await response.json();
      setDrinksCollection(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedButton === "Available Now") {
      setFilteredDrinks(() =>
        drinksCollection.filter((items) => items.available)
      );
    } else {
      setFilteredDrinks(drinksCollection);
    }
  }, [selectedButton, drinksCollection]);

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
        px={{ base: "2em", md: "3em", xl: 0 }}
      >
        <Container
          maxW="6xl"
          bg="brand.darkGray"
          centerContent={true}
          padding={{ xl: "6em", lg: "5em", md: "4em 3em", base: "3em 1.5em" }}
          borderRadius="1.05rem"
          marginBottom="4em"
          marginTop="12%"
          bgImage={containerBgImage}
          bgRepeat="no-repeat"
          backgroundPosition={{
            xl: "65% 40px",
            md: "80% 40px",
            base: "center 10px",
          }}
        >
          <Stack spacing={3} textAlign="center" mx={5}>
            <Text fontSize="3xl" color="brand.white" fontWeight="semibold">
              Our Collection
            </Text>
            <Text
              fontSize={{ lg: "xl", md: "1rem", base: "0.85rem" }}
              color="brand.gray"
              marginBottom={4}
            >
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
                {buttons.map((button) => (
                  <Button
                    key={button.id}
                    bgColor={
                      selectedButton === button.text
                        ? "brand.deepGray"
                        : "brand.darkGray"
                    }
                    color="brand.white"
                    fontSize={{ md: "md", base: "0.85rem" }}
                    onClick={() => setSelectedButton(button.text)}
                  >
                    {button.text}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
          </Stack>
          <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap="2rem">
            {filteredDrinks.length > 0 &&
              filteredDrinks.map((drink) => {
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
