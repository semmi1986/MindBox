import { Box, Center, Container, Heading, VStack } from '@chakra-ui/react';
import ItemList from './ItemList';

function App() {
  return (
    <Center bg="rgb(245,245,245)" h="100vh">
      <Container centerContent>
        <VStack>
          <Box>
            <Heading
              as="h1"
              letterSpacing={40}
              fontSize="70px"
              fontWeight={100}
            >
              todos
            </Heading>
          </Box>
          <Box
            width="700px"
            bg="white"
            borderLeft="1px solid"
            borderRight="1px solid"
          >
            <ItemList />
          </Box>
        </VStack>
      </Container>
    </Center>
  );
}

export default App;
