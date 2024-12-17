import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box
      height="100vh"
      width="100vw"
      overflow="hidden"
      bgImage={"url('/darkbg.svg')"}
    >
      <Flex align="center" justify="center" height="100%">
        <Image src="/btclogo.svg" alt="Bitcoin Logo" boxSize="150px" />
      </Flex>
    </Box>
  );
}
