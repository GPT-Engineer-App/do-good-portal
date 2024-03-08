import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" justifyContent="space-between" p={4} bg="gray.200">
      <Box>
        <Link as={ReactRouterLink} to="/" p={2}>
          Home
        </Link>
        <Link as={ReactRouterLink} to="/business-list" p={2}>
          Business List
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
