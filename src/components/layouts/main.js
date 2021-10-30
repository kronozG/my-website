import Head from "next/head";
import NavBar from "../navigation";
import Footer from "../footer";
import { Box, Container } from "@chakra-ui/react";

function Main({ children, router }) {
  return (
    <Box>
      <Head>
        <title>Gabriel Leon - Home</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={24}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
}

export default Main;
