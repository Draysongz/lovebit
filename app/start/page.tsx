import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'


export default function Start() {
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgImage={"url('/lightbg.svg')"}
      bgSize={"cover"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      direction={"column"}
    >
      <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Heading fontSize={"2xl"} fontFamily={"body"} textAlign={"center"}  color={"rgba(3, 6, 21, 1)"} fontWeight={"900"}>
          LOVEBIT <br /> BOT
        </Heading>
      </Flex>
    </Flex>
  );
}