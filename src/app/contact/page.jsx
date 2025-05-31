"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Center,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import { ImLocation } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import SocialIcons from "../../components/SocialIcons";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Center>
      <SimpleGrid
        my={["5rem", "4rem"]}
        width={["90vw", "95vw", "85vw"]}
        templateColumns={[null, null, "40% 55%"]}
      >
        <RevealWrapper className="load-hidden" delay={300}>
          <Heading fontSize="2.8rem">
            Let&apos;s discuss on something{" "}
            <Text color="social.instagram" display="inline">
              cool
            </Text>{" "}
            together
          </Heading>

          <Stack marginTop="4rem">
            <Tooltip label="Send Mail">
              <Link
                href="mailto:kcb.brurcse42@gmail.com"
                target="_blank"
                className="contact-text-span"
                my={3}
                _hover={{ textDecoration: "none" }}
              >
                <Icon as={IoIosMail} mx={2} />
                <Text>kcb.brurcse42@gmail.com</Text>
              </Link>
            </Tooltip>

            <Tooltip label="Location">
              <Text className="contact-text-span" my={3}>
                <Icon as={ImLocation} mx={2} />
                <span>Dhaka, Bangladesh</span>
              </Text>
            </Tooltip>
          </Stack>
          <SocialIcons />
        </RevealWrapper>

        <ContactForm />
      </SimpleGrid>
    </Center>
  );
};

export default Contact;
