import { Box, Button, Container, Flex, Heading, Icon, IconButton, Image, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaBars, FaRocket, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Flex position="fixed" top="0" width="100%" bg={scrollPosition > 20 ? "blackAlpha.900" : "blackAlpha.700"} zIndex="3" justifyContent="space-between" alignItems="center" p={4} transition="background-color 0.3s">
        <IconButton icon={<FaBars />} aria-label="Open Menu" variant="ghost" color="white" />
        <Text color="white" fontSize="lg" fontWeight="bold">
          Logo
        </Text>
        <Stack direction="row" spacing={4}>
          <Link color="white" _hover={{ color: "teal.300" }}>
            Home
          </Link>
          <Link color="white" _hover={{ color: "teal.300" }}>
            Features
          </Link>
          <Link color="white" _hover={{ color: "teal.300" }}>
            Testimonials
          </Link>
          <Link color="white" _hover={{ color: "teal.300" }}>
            Contact
          </Link>
        </Stack>
      </Flex>

      <Container maxW="container.xl" pt="100px">
        <VStack spacing={10} align="stretch">
          <Box bg="blue.900" color="white" p={10} textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Welcome to Our Platform
            </Heading>
            <Text fontSize="xl">Explore the ultimate solution for your needs.</Text>
            <Button mt={6} size="lg" colorScheme="teal">
              Get Started
            </Button>
          </Box>

          <Box p={10}>
            <Heading as="h2" size="lg" mb={6}>
              Features
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={10}>
              <Box flex="1" bg="white" p={6} boxShadow="md">
                <Icon as={FaRocket} w={10} h={10} color="teal.500" />
                <Text mt={4} fontSize="lg" fontWeight="bold">
                  Feature One
                </Text>
                <Text mt={2}>Description of feature one.</Text>
              </Box>
              <Box flex="1" bg="white" p={6} boxShadow="md">
                <Icon as={FaRocket} w={10} h={10} color="teal.500" />
                <Text mt={4} fontSize="lg" fontWeight="bold">
                  Feature Two
                </Text>
                <Text mt={2}>Description of feature two.</Text>
              </Box>
            </Stack>
          </Box>

          <Box bg="gray.100" p={10}>
            <Heading as="h2" size="lg" mb={6}>
              Testimonials
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={10}>
              <Box flex="1" textAlign="center">
                <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNTI4NjMwMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Testimonial 1" />
                <Text mt={4} fontWeight="bold">
                  John Doe
                </Text>
                <Text fontStyle="italic">"Great service, highly recommend!"</Text>
                <Icon as={FaStar} color="yellow.400" />
              </Box>
            </Stack>
          </Box>

          <Box bg="teal.500" color="white" p={10} textAlign="center">
            <Heading as="h2" size="lg" mb={4}>
              Ready to Start?
            </Heading>
            <Button size="lg" variant="outline" colorScheme="whiteAlpha">
              Learn More
            </Button>
          </Box>

          <Box bg="blue.900" color="gray.300" p={6} textAlign="center">
            <Text>&copy; 2023 Your Company. All rights reserved.</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
