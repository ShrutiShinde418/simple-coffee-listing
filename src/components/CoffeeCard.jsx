import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Badge,
  HStack,
  Heading,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import filledStar from "../assets/Star_fill.svg";
import notFilledStar from "../assets/Star.svg";

const CoffeeCard = (props) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Card maxW="sm" bg="brand.darkGray" boxShadow="none">
      <CardBody p={0} position="relative">
        <Skeleton borderRadius="lg" isLoaded={!isImageLoading}>
          <Image
            src={props.image}
            alt={props.title}
            borderRadius="lg"
            onLoad={() => setIsImageLoading(false)}
          />
        </Skeleton>
        {props.isPopular && (
          <Badge
            color="black"
            bg="brand.yellow"
            padding="0.35em 0.75em"
            borderRadius="3xl"
            position="absolute"
            top="7px"
            left="7px"
            textTransform="capitalize"
          >
            Popular
          </Badge>
        )}
      </CardBody>
      <CardFooter sx={{ display: "flex", flexDir: "column", padding: "0.5em" }}>
        <HStack mt="2" mb={1} justifyContent="space-between">
          <Heading
            fontSize={{ xl: "1.15rem", md: "1rem" }}
            color="brand.white"
            fontWeight="semibold"
          >
            {props.title}
          </Heading>
          <Badge
            color="brand.black"
            padding="0.25em 0.5em"
            borderRadius="base"
            bg="brand.lightGreen"
          >
            {props.price}
          </Badge>
        </HStack>
        <HStack
          mt="2"
          justifyContent="space-between"
          fontSize={{ xl: "1rem", base: "0.85rem" }}
        >
          <HStack>
            <img src={!props.rating ? notFilledStar : filledStar} alt="Star" />
            <Text color="brand.white">
              {!props.rating
                ? "No ratings"
                : parseFloat(props.rating).toFixed(2)}
            </Text>
            <Text color="brand.gray">
              {props.votes !== 0 ? `(${props.votes} votes)` : ""}
            </Text>
          </HStack>
          {!props.available && (
            <HStack>
              <Text color="brand.salmon" fontWeight={600}>
                Sold out
              </Text>
            </HStack>
          )}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CoffeeCard;
