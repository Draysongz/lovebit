import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box position="relative" height="100vh" width="100vw" overflow="hidden">
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgImage={
          "linear-gradient(0deg,rgba(3, 6, 21, 0.964),rgba(3, 6, 21, 0.964) ), url('/bg.png')"
        }
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />

      {/* Semi-Transparent Overlay */}
      {/* <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgColor="#000301" // Semi-transparent background color
        zIndex={1}
        opacity={0.96}
      /> */}

      {/* Centered Content */}
      <Flex
        position="relative"
        align="center"
        justify="center"
        height="100%"
        zIndex={2}
      >
        <Image src="/btclogo.svg" alt="Bitcoin Logo" boxSize="150px" />
      </Flex>
    </Box>
  );
}
