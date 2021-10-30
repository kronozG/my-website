import {
  Box,
  Tag,
  TagLabel,
  useColorModeValue,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SiTailwindcss } from "react-icons/si";
import {
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoVue,
  IoLogoLaravel,
  IoLogoPython,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoMicrosoft,
} from "react-icons/io5";

function Skills() {
  const bg = useColorModeValue("blackAlpha", "blackAlpha.900");
  const size = useBreakpointValue({ base: "sm", md: "lg" });

  return (
    <>
      <Grid
        pl={2}
        pt={10}
        align="center"
        templateColumns="repeat(4, 1fr)"
        gap={1}
      >
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoHtml5 />
            <TagLabel pl={1}>HTML5</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoReact />
            <TagLabel pl={1}>React</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoVue />
            <TagLabel pl={1}>Vue</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoLaravel />
            <TagLabel pl={1}>Laravel</TagLabel>
          </Tag>
        </Box>
      </Grid>
      <Grid
        pl={2}
        pt={2}
        align="center"
        templateColumns="repeat(3, 1fr)"
        gap={1}
      >
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoPython />
            <TagLabel pl={1}>Python</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <SiTailwindcss />
            <TagLabel pl={1}>Tailwind</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoGithub />
            <TagLabel pl={1}>Github</TagLabel>
          </Tag>
        </Box>
      </Grid>
      <Grid
        pl={2}
        pt={2}
        align="center"
        templateColumns="repeat(4, 1fr)"
        gap={1}
      >
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoJavascript />
            <TagLabel pl={1}>Javascript</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoCss3 />
            <TagLabel pl={1}>CSS3</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoMicrosoft />
            <TagLabel pl={1}>C#</TagLabel>
          </Tag>
        </Box>
        <Box w="100%" h="10">
          <Tag size={size} colorScheme={bg} borderRadius="full">
            <IoLogoJavascript />
            <TagLabel pl={1}>ExpressJS</TagLabel>
          </Tag>
        </Box>
      </Grid>
    </>
  );
}

export default Skills;
