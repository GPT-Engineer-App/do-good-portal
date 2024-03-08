import { Box, Container, Heading, SimpleGrid, Text, VStack, Input, Button, Image, useColorModeValue, Badge, Icon } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { FaSearch, FaHeart, FaLeaf, FaHandshake } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} minH="100vh">
      <Navigation />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={4} as="header">
          <Image src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVhcnRofGVufDB8fHx8MTcwOTg2ODYwMHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="100px" alt="Sustainable Earth" />
          <Heading as="h1" size="xl">
            PhilanthroLink
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your curated directory for connecting with socially responsible businesses.
          </Text>
          <Input placeholder="Search for businesses or categories" size="lg" maxWidth="500px" />
          <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg">
            Search
          </Button>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
          {businessCard("The Giving Tree", "Sustainability", FaLeaf)}
          {businessCard("Heartfelt Works", "Charitable", FaHeart)}
          {businessCard("EcoHandshake", "Eco-friendly", FaHandshake)}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const businessCard = (title, category, IconComponent) => {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <VStack bg={cardBg} boxShadow="md" borderRadius="lg" p={5} align="start" spacing={3}>
      <Badge colorScheme="green" p={1} borderRadius="full">
        Featured
      </Badge>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel dolor massa.</Text>
      <Box>
        <Icon as={IconComponent} w={5} h={5} color="green.500" />
        <Text as="span" ml={2} fontSize="sm" fontWeight="bold">
          {category}
        </Text>
      </Box>
    </VStack>
  );
};

export default Index;
