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
          Develop this site using tools like NextJs, ChakraUI, Framer Motion
        </Paragraph>
      </Box>
      <Box pl={5} pt={4}>
        <Tag size="md" colorScheme="green">
          <TagLabel>WEBSITE</TagLabel>
        </Tag>
        <Link pl="3" href="https://chakra-ui.com" isExternal>
          Personal Web <ExternalLinkIcon mx="2px" />
        </Link>
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
