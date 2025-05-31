"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  useRadioGroup,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import { useState } from "react";
import RadioCard from "../../components/RadioCards";
import { projectsData } from "../../utils/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedData, setSelectedData] = useState(projectsData);

  // Collect unique types from projectsData dynamically for filter options
  const uniqueTypes = Array.from(
    new Set(projectsData.map((project) => project.type))
  );

  // Add 'ALL' option at the beginning
  const options = ["ALL", ...uniqueTypes];

  const valSelectFn = (value) =>
    setSelectedData(() =>
      value === "ALL"
        ? projectsData
        : projectsData.filter((data) => data.type === value)
    );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "project",
    defaultValue: "ALL",
    onChange: valSelectFn,
  });

  const group = getRootProps();

  return (
    <Center>
      <Box width={["90vw", "90vw", "80vw"]} height="100%" marginBottom="4rem">
        <Heading className="sub-heading" size="md" my={3}>
          PROJECTS
        </Heading>

        <Flex {...group} w="100%" px="6" py="5" align="center" justify="center">
          <HStack spacing={4}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </Flex>

        <RevealWrapper delay={300}>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
          >
            {selectedData.map((data, index) => (
              <ProjectCard {...{ data }} key={index} />
            ))}
          </SimpleGrid>
        </RevealWrapper>
      </Box>
    </Center>
  );
};

export default Projects;
