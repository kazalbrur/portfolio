import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";
import RadioCard from "../../components/RadioCards";

const ContactForm = () => {
  const toast = useToast();
  const options = ["Web Development", "Hiring", "Freelance", "Other"];
  const [interestedIn, setInterestedIn] = useState("Web Development");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "interested",
    defaultValue: interestedIn,
    onChange: (value) => setInterestedIn(value),
  });
  const group = getRootProps();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async (formData) => {
      setIsLoading(true);

      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: "New Contact Message from Website",
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
        "interested-in": interestedIn,
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message || "Unable to send message");
        }

        reset({
          name: "",
          email: "",
          number: "",
          message: "",
        });

        toast({
          title: "Message sent successfully",
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error sending message:", error);
        toast({
          title: error.message,
          status: "error",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [interestedIn, toast, reset]
  );

  return (
    <RevealWrapper className="load-hidden" delay={600}>
      <Card
        className="contact-form-card"
        borderRadius="2rem"
        backgroundColor="white"
        padding="10px 15px"
      >
        <CardBody>
          <Heading size="md" color="black" my={3}>
            I&apos;m interested in...
          </Heading>
          <Flex {...group} wrap="wrap" px={1}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Flex>

          <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired isInvalid={errors.name} my={4}>
              <FormLabel htmlFor="name">Enter Name</FormLabel>
              <Input
                id="name"
                className="contact-input"
                type="text"
                placeholder="Your Name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel htmlFor="email">Enter Email</FormLabel>
              <Input
                id="email"
                className="contact-input"
                type="email"
                placeholder="Your Email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl my={4}>
              <FormLabel htmlFor="number">Enter Phone No.</FormLabel>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <NumberInput {...field} id="number">
                    <NumberInputField
                      className="contact-input"
                      placeholder="Your Phone No."
                    />
                  </NumberInput>
                )}
              />
            </FormControl>

            <FormControl isRequired isInvalid={errors.message}>
              <FormLabel htmlFor="message">Enter Message</FormLabel>
              <Textarea
                id="message"
                className="contact-input"
                placeholder="Your Message"
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", { required: "Message is required" })}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <Button
                isLoading={isLoading}
                loadingText="Submitting"
                backgroundColor="social.instagram"
                my={3}
                _hover={{ backgroundColor: "social.instagramHover" }}
                type="submit"
              >
                <Icon mr={1} as={BsFillSendFill} />
                Send Message
              </Button>
            </FormControl>
          </Stack>
        </CardBody>
      </Card>
    </RevealWrapper>
  );
};

export default ContactForm;
