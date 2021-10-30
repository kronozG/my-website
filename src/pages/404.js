import NextLink from "next/link";
import Head from "next/head";

import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

function NotFound() {
  return (
    <Container my={20}>
      <Head>
        <title>404</title>
      </Head>
      <Heading>Not found</Heading>
      <Text>The page you re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
}

export default NotFound;
