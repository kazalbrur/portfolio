"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { interestsData } from "../../utils/constants";
import InterestsCard from "./InterestsCard";

const Page = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const highlightColor = useColorModeValue("blue.500", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box width="100%" minHeight="100vh" py={8}>
      <Container maxW="container.xl" px={4}>
        <RevealWrapper className="load-hidden" id="about" delay={300}>
          <VStack spacing={8} align="stretch">
            <Heading className="sub-heading" size="md">
              ABOUT
            </Heading>

            <SimpleGrid
              columns={[1, null, 2]}
              gap={8}
              templateColumns={[null, null, "35% 65%"]}
            >
              <Box
                position="relative"
                _hover={{
                  transform: "translateY(-5px)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Image
                  objectFit="cover"
                  src="./images/profile.png"
                  alt="profile-image"
                  width="100%"
                  height="auto"
                  borderRadius="xl"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                />
                <Flex position="absolute" bottom={4} right={4} gap={2}>
                  <Badge
                    as="a"
                    href="https://github.com/kazalbrur"
                    target="_blank"
                    rel="noopener noreferrer"
                    px={3}
                    py={1}
                    borderRadius="full"
                    backgroundColor={cardBg}
                    color={highlightColor}
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      backgroundColor: highlightColor,
                      color: "white",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Icon as={FaGithub} mr={2} />
                    GitHub
                  </Badge>
                  <Badge
                    as="a"
                    href="https://www.linkedin.com/in/kcbcsebru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    px={3}
                    py={1}
                    borderRadius="full"
                    backgroundColor={cardBg}
                    color={highlightColor}
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      backgroundColor: highlightColor,
                      color: "white",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Icon as={FaLinkedin} mr={2} />
                    LinkedIn
                  </Badge>
                </Flex>
              </Box>

              <VStack
                align="stretch"
                spacing={6}
                backgroundColor={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="0 4px 12px rgba(0,0,0,0.05)"
                transition="all 0.3s ease-in-out"
                _hover={{
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  transform: "translateY(-5px)",
                }}
              >
             <Heading
  size="xl"
  bgGradient={`linear(to-r, ${highlightColor}, ${highlightColor}80)`}
  bgClip="text"
  fontWeight="bold"
>
  👋 Hey there
</Heading>

<Text fontSize="lg" color={textColor} lineHeight="tall">
  I&apos;m{" "}
  <span style={{ color: highlightColor, fontWeight: "bold" }}>
    Kazal Chandra Barman
  </span>
  , a <strong>Lead SQA Engineer</strong> with over 5 years of experience specializing in{" "}
  <span style={{ color: highlightColor, fontWeight: "bold" }}>
    AI/ML systems, OCR pipelines, NLP model testing, and web automation
  </span>
  . I’ve built scalable QA strategies, designed automation frameworks, and led teams to deliver high-quality releases across fast-paced, AI-driven platforms.
</Text>

<Text fontSize="lg" color={textColor} lineHeight="tall" mt={4}>
  🚀 Proficient in tools like <strong>Cypress, Selenium, PyTest, Postman</strong>, and performance tools like JMeter and Locust. I integrate QA into CI/CD pipelines using GitLab, Docker, and AWS — ensuring performance, security, and stability in both frontend and backend systems.
</Text>

<Text fontSize="lg" color={textColor} lineHeight="tall" mt={4}>
  📸 I’ve led quality efforts in advanced domains like <strong>multilingual OCR (Bangla, English, Japanese)</strong>, computer vision–based virtual try-on platforms, and annotation tools serving multiple ML teams. My testing scope spans UI/UX, API, database, and cross-browser validation — all under Agile environments.
</Text>

<Text fontSize="lg" color={textColor} lineHeight="tall" mt={4}>
  💡 Passionate about innovation and quality-first engineering, I’m always eager to explore cutting-edge AI testing strategies and collaborate on meaningful, scalable solutions. Let’s build the future of software quality together!
</Text>

<Text fontSize="lg" color={textColor} lineHeight="tall" mt={4}>
  Happy testing & exploring! 🤖
</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </RevealWrapper>

        <RevealWrapper className="load-hidden" id="interests" delay={600}>
          <VStack spacing={8} align="stretch" mt={12}>
            <Heading className="sub-heading" size="md">
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={6}
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
            >
              {interestsData.map((data, index) => (
                <InterestsCard
                  interest={data.interest}
                  icon={data.icon}
                  key={index}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </RevealWrapper>
      </Container>
    </Box>
  );
};

export default Page;
