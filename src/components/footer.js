import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box pt={20} pb={8} align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Gabriel Leon
    </Box>
  );
}

export default Footer;
