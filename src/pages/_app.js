import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/main";
import customTheme from "../styles/theme";
import { AnimatePresence } from "framer-motion";

function Portfolio({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default Portfolio;
