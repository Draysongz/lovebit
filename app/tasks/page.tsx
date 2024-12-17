"use client";
import React from "react";
import { Flex, Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { taskList } from "@/lib/data";
import { useState } from "react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type task = {
    title : string,
    reward: number
    description: string
}
const Task = () => {
  const [buttonState, setButtonState] = useState("Play");
  const [selectedTask, setSelectedTask] = useState<task>()


  const handleSelect = async(task:  task)=>{
    setSelectedTask(task)
  }
  return (
    <Flex
      bgImage={
        "linear-gradient(0deg,rgba(3, 6, 21, 0.964),rgba(3, 6, 21, 0.964) ), url('/bg.png')"
      }
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      minH={"100vh"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
    >
      <Box mb={6}>
        <Heading
          bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
        >
          AVAILABLE TASKS
        </Heading>
      </Box>

      <Flex direction={"column"} w="90%" maxW="600px" gap={4}>
        {taskList.map((task, index) => (
          <Flex
            key={index}
            alignItems="center"
            justifyContent="space-between"
            p={1}
            w="100%"
          >
            {/* Task Icon */}
            <Image
              src={"/yt.svg"}
              alt="youtube-icon"
              boxSize="40px"
              objectFit="contain"
            />

            {/* Task Details */}
            <Flex direction="column" flex="1" ml={4}>
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="rgba(234, 234, 234, 1)"
              >
                {task.title}
              </Text>
              <Text fontSize="xs" color="rgba(234, 234, 234, 1)">
                + {new Intl.NumberFormat().format(task.reward)} LP
              </Text>
            </Flex>

            {/* Claim Button */}
            {buttonState === "Claim" && (
              <Button
                bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                color="rgba(255, 255, 255, 1)"
                fontSize="sm"
                fontWeight="bold"
                border="1px solid"
                borderColor="transparent"
                borderImageSource="radial-gradient(106.96% 821.85% at 104.75% 0%, #020AA1 0%, #FFFFFF 50.5%, #020AA1 100%)"
                borderImageSlice={1}
                _hover={{
                  bgGradient:
                    "conic-gradient(from 180deg at 50% 50%, #1018BD, #469EEC, #95A3FF, #1018BD)",
                  transition: "background 0.3s ease",
                }}
                px={4}
                py={2}
                borderRadius="20px"
              >
                Claim
              </Button>
            )}
            <DialogRoot
              placement={"center"}
              motionPreset="slide-in-bottom"
              size={"xs"}
            >
              <DialogTrigger asChild>
                {buttonState === "Play" && (
                  <Button
                    bg="transparent"
                    fontSize="sm"
                    fontWeight="bold"
                    p={3}
                    border="1px solid"
                    borderRadius="20px"
                    borderImageSource="radial-gradient(106.96% 821.85% at 104.75% 0%, #020AA1 0%, #FFFFFF 50.5%, #020AA1 100%)"
                    borderImageSlice={1}
                    bgGradient="radial-gradient(106.96% 821.85% at 104.75% 0%, #020AA1 0%, #FFFFFF 50.5%, #020AA1 100%)"
                    bgClip="text"
                    color="transparent"
                    _hover={{
                      bgGradient: "radial-gradient(circle, #FFFFFF, #020AA1)",
                      bgClip: "text",
                      borderImageSource:
                        "radial-gradient(circle, #FFFFFF 0%, #020AA1 100%)",
                    }}
                    onClick={() => handleSelect(task)}
                  >
                    Play
                  </Button>
                )}
              </DialogTrigger>

              <DialogContent
                bgColor={"rgba(17, 17, 17, 1)"}
                borderRadius={"20px"}
              >
                <DialogBody p={2}>
                  <Flex direction={"column"} p={2} gap={3} justifyContent={"center"} alignItems={"center"}>
                    <Heading
                      bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                      bgClip="text"
                      fontSize="2xl"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {selectedTask && selectedTask.title}
                    </Heading>

                    <Text textAlign={"center"} color={"rgba(255, 255, 255, 1)"}>
                      {selectedTask && selectedTask.description}
                    </Text>

                    <Heading
                      bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                      bgClip="text"
                      fontSize="48px"
                      fontWeight="bold"
                      textAlign="center"
                      lineHeight={"54px"}
                    >
                      +{" "}
                      {selectedTask &&
                        new Intl.NumberFormat().format(
                          selectedTask.reward
                        )}{" "}
                      LP
                    </Heading>

                    <Button
                      bg="transparent"
                      fontSize="sm"
                      fontWeight="bold"
                      p={3}
                      w={"35vw"}
                      border="1px solid "
                      borderRadius="15px"
                      borderImage="radial-gradient(106.96% 821.85% at 104.75% 0%, #020AA1 0%, #FFFFFF 50.5%, #020AA1 100%)"
                      borderImageSlice={1}
                      bgGradient="radial-gradient(106.96% 821.85% at 104.75% 0%, #020AA1 0%, #FFFFFF 50.5%, #020AA1 100%)"
                      bgClip="text"
                      color="transparent"
                      _hover={{
                        bgGradient: "radial-gradient(circle, #FFFFFF, #020AA1)",
                        bgClip: "text",
                        borderImageSource:
                          "radial-gradient(circle, #FFFFFF 0%, #020AA1 100%)",
                      }}
                    >
                      VISIT NOW
                    </Button>
                  </Flex>
                </DialogBody>
              </DialogContent>
            </DialogRoot>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Task;
