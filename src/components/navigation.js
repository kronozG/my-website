import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeSwitch from "./theme-switch";

function Navigation(props) {
  const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("#171923", "#727272");
    return (
      <NextLink href={href} passHref>
        <Link
          p={2}
          bg={active ? "black" : undefined}
          color={active ? "white" : inactiveColor}
          _target={_target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    );
  };

  const { path } = props;
  const bg = useColorModeValue("#ffffff", "#1c1c1c");

  return (
    <Box
      boxShadow="sm"
      position="fixed"
      w="100%"
      bg={bg}
      zIndex={1}
      {...props}
      opacity={.95}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeSwitch />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navigation;
