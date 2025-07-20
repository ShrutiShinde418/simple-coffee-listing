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
import notFilledStar from "../assets/Star.svg";

const CoffeeCard = (props) => {
  return (
    <Card maxW="sm" bg="brand.darkGray">
      <CardBody p={0} position="relative">
        <Image src={props.image} alt={props.title} borderRadius="lg" />
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
        <HStack mt="2" mb={2} justifyContent="space-between">
          <Heading size="md" color="brand.white" fontWeight="semibold">
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
        <HStack mt="2" justifyContent="space-between">
          <HStack>
            <img src={!props.rating ? notFilledStar : filledStar} alt="Star" />
            <Text color="brand.white">
              {!props.rating ? "No ratings" : props.rating}
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
