import {
  Box,
  Heading,
  Container,
  Image,
  TagLabel,
  Tag,
  Link,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/layouts/section";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Paragraph } from "../components/index/sections";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Box pt={4}>
        <Heading color="#38e2b3" size="md" variant="section-title">
          My website
        </Heading>
        <Paragraph>
          I am a developer interested in technology, I like to learn new things
          every day and I want to grow in my
          sssssssssssssssssssssssssssssssskills I am a developer interested in
          technology, I like to learn new things
        </Paragraph>
      </Box>
      <Box pl={5} pt={4}>
        <Tag size="md" colorScheme="green">
          <TagLabel>WEBSITE</TagLabel>
        </Tag>
        <Link pl="3" href="https://chakra-ui.com" isExternal>
          Chakra Design system <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
      <Box pl={5} pt={4}>
        <Tag size="md" colorScheme="green">
          <TagLabel>STACK</TagLabel>
        </Tag>
        <p>NEXT JS | Chakra UI | Framer Motion</p>
      </Box>
      <Box boxShadow="xl" pt={8} align="center">
        <Image
          borderColor="white"
          borderWidth={1}
          borderStyle="solid"
          borderRadius="lg"
          src="/images/website.png"
        />
      </Box>
      <Box boxShadow="xl" pt={8} align="center">
        <Image
          borderColor="white"
          borderWidth={1}
          borderStyle="solid"
          borderRadius="lg"
          src="/images/website.png"
        />
      </Box>
    </Container>
  </Layout>
);

export default Works;
