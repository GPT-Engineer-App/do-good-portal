import { Box, Container, Heading, VStack, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

const businessCategories = [
  { title: "Sustainability", businesses: ["The Giving Tree", "Green Innovations", "EcoSolutions"] },
  { title: "Charitable", businesses: ["Heartfelt Works", "AidHub", "CharityFirst"] },
  { title: "Eco-friendly", businesses: ["EcoHandshake", "NatureFirst", "EcoEnthusiasts"] },
];

const BusinessList = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={4} as="header">
          <Heading as="h1" size="xl" color="compassionateBlue">
            Business Categories
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Explore businesses by category
          </Text>
        </VStack>

        {businessCategories.map((category) => (
          <Box key={category.title}>
            <Heading as="h2" size="lg" mt={10} color="inspiringPurple">
              {category.title}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
              {category.businesses.map((business) => (
                <Text key={business} p={5} boxShadow="md" borderRadius="lg" bg="white" color="vibrantRed">
                  {business}
                </Text>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default BusinessList;
