"use client";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { subscribeToNewsletter } from "../../utils/utils";

export default function NewsLetterComponent() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Container maxW={["sm", "md", "lg"]} rounded={"lg"} p={6}>
          <Heading
            as={"h2"}
            fontSize={{ base: "lg", sm: "xl" }}
            textAlign={"center"}
            mb={5}
          >
            Subscribe to my Newsletter
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
            onSubmit={async (e) => {
              e.preventDefault();
              setError(false);
              setState("submitting");
              subscribeToNewsletter(email)
                .then((response) => {
                  setState(response.result);
                  onOpen(true);
                })
                .catch((error) => {
                  setError(true);
                  setState("initial");
                  console.error("An error occurred:", error);
                });
            }}
          >
            <FormControl>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"email"}
                type={"email"}
                required
                placeholder={"Your Email"}
                aria-label={"Your Email"}
                value={email}
                disabled={state !== "initial"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                colorScheme={state === "success" ? "green" : "blue"}
                isLoading={state === "submitting"}
                w="100%"
                type={state === "success" ? "button" : "submit"}
              >
                {state === "success" ? <CheckIcon /> : "Submit"}
              </Button>
            </FormControl>
          </Stack>
          <Text
            mt={2}
            textAlign={"center"}
            color={error ? "red.500" : "gray.500"}
          >
            {error
              ? "Oh no an error occured! 😢 Please try again later."
              : "You won't receive any spam! ✌️"}
          </Text>
        </Container>
      </Flex>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={["xs", "md", "lg"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Thank You for Subscribing</ModalHeader>
          <ModalBody padding="1rem">
            {/* Medium.com does not support newsletter subscriptions directly */}
            Newsletter subscription is not supported for Medium.com blogs.
            <br />
            Please follow me on{" "}
            <Text as="span" color="#068FFF" display="inline">
              Medium.com
            </Text>{" "}
            for updates!
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
