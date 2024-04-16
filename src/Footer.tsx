import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex m="0 20px 10px">
      <Box>3 items left</Box>
      <Spacer />
      <Button p="5px">Clear completes</Button>
    </Flex>
  );
}

export default Footer;
