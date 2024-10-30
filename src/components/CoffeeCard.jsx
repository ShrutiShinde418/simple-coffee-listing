import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Badge,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import filledStar from "../assets/Star_fill.svg";

const CoffeeCard = (props) => {
  return (
    <Card maxW="sm">
      <CardBody p={0} position="relative">
        <Image src={props.image} alt={props.title} borderRadius="lg" />
        {props.isPopular && (
          <Badge
            color="black"
            bg="yellow"
            padding="0.35em 0.75em"
            borderRadius="3xl"
            position="absolute"
            top="7px"
            left="7px"
          >
            Popular
          </Badge>
        )}
      </CardBody>
      <CardFooter sx={{ display: "flex", flexDir: "column", padding: "0.5em" }}>
        <HStack mt="2" mb={2} justifyContent="space-between">
          <Heading size="md">{props.title}</Heading>
          <Badge color="blue.600" padding="0.25em 0.5em" borderRadius="base">
            {props.price}
          </Badge>
        </HStack>
        <HStack>
          <img src={filledStar} alt="Star" />
          <Text>{props.rating}</Text>
          <Text>({props.votes} votes)</Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CoffeeCard;
