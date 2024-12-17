"use client"
import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Card,
  Image,
  Button,
  List,
} from "@chakra-ui/react";
import { BottomNav } from "@/components/button-nav";
import { gameDeets } from "@/lib/data";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";



type game = {
  title: string;
  description: string,
  cta: string,
  objectives: string
  controls: string[]
  gameplay: string[]
  endgame: string,
  pointSystem: string[]
  bonusPoints: string[]
  leaderboard?: string[]
};
function page() {
    const [selectedGame, setSelectedGame] = useState<game>()
  return (
    <Flex
      bgImage={"url('/darkbg.svg')"}
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
          PLAY GAMES
        </Heading>
      </Box>

      <Flex
        flexWrap="wrap" // Enable wrapping
        justifyContent="center"
        alignItems="center"
        gap={4} // Spacing between items
        pb={10}
      >
        {gameDeets &&
          gameDeets.map((game, index) => (
            <Card.Root
              key={index}
              maxW="sm"
              overflow="hidden"
              p={2}
              bgGradient="linear-gradient(0deg,rgba(3, 6, 21, 0.9),rgba(3, 6, 21, 0.9) )"
              boxShadow="lg" // Optional: Adds shadow for depth
              flexBasis={["45%", "45%"]} // Full width on small screens, two items per line on larger screens
            >
              <Image src="/rect.svg" alt="card detail" p={2} />

              <Card.Body gap={1}>
                <Flex
                  direction={"column"}
                  justifyContent={"Center"}
                  alignItems={"center"}
                >
                  <Text
                    bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                    bgClip="text"
                    fontSize="16px"
                    // fontWeight="bold"
                    textAlign="center"
                  >
                    {game.title}
                  </Text>
                  <Text
                    bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                    bgClip="text"
                    fontSize="20px"
                    // fontWeight="bold"
                    textAlign="center"
                  >
                    + 20LP
                  </Text>
                  <DrawerRoot placement={"bottom"}>
                    <DrawerBackdrop />
                    <DrawerTrigger asChild>
                      <Button
                        bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                        borderImageSource="radial-gradient(106.96% 821.85% at 104.75% 0%, #020AA1 0%, #FFFFFF 50.5%, #020AA1 100%)"
                        borderImageSlice={1}
                        color="white"
                        fontSize="md"
                        fontWeight="bold"
                        w={"35vw"}
                        borderRadius="10px" // Ensure border radius is applied
                        _hover={{
                          bgGradient:
                            "conic-gradient(from 180deg at 50% 50%, #1018BD 0deg, #469EEC 72deg, #95A3FF 144deg, #1018BD 216deg, #4AAAFF 288deg, #1018BD 360deg)",
                          borderImageSource:
                            "radial-gradient(circle, #FFFFFF 0%, #020AA1 100%)",
                          transition: "background 0.3s ease",
                        }}
                        onClick={() => {
                          setSelectedGame(game);
                        }}
                      >
                        {game.cta}
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent roundedTop={"l3"}>
                      <DrawerBody p={3} bg={"#030615"}>
                        <Flex direction={"column"} gap={3}>
                          <Image src="/longrect.svg" alt="long rect" />

                          <Flex direction={"column"} gap={2}>
                            <Heading
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              bgClip="text"
                              fontSize="20px"
                              fontWeight="bold"
                            >
                              {selectedGame?.title.toUpperCase()}
                            </Heading>

                            <Text color={"white"}>
                              {selectedGame?.description}
                            </Text>

                            <Button
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              borderImageSource="radial-gradient(106.96% 821.85% at 104.75% 0%, #020AA1 0%, #FFFFFF 50.5%, #020AA1 100%)"
                              borderImageSlice={1}
                              color="white"
                              fontSize="md"
                              fontWeight="bold"
                              w={"100%"}
                              borderRadius="10px" // Ensure border radius is applied
                              _hover={{
                                bgGradient:
                                  "conic-gradient(from 180deg at 50% 50%, #1018BD 0deg, #469EEC 72deg, #95A3FF 144deg, #1018BD 216deg, #4AAAFF 288deg, #1018BD 360deg)",
                                borderImageSource:
                                  "radial-gradient(circle, #FFFFFF 0%, #020AA1 100%)",
                                transition: "background 0.3s ease",
                              }}
                            >
                              {selectedGame?.cta}
                            </Button>
                          </Flex>

                          <Flex direction={"column"}>
                            <Text
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              bgClip="text"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              Objectives
                            </Text>
                            <Text color={"white"}>
                              {selectedGame?.objectives}
                            </Text>
                          </Flex>

                          <Flex direction={"column"}>
                            <Text
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              bgClip="text"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              Control
                            </Text>

                            <List.Root
                              as={"ul"}
                              listStyle={"decimal"}
                              p={3}
                              ps="5"
                            >
                              {selectedGame &&
                                selectedGame.controls &&
                                selectedGame.controls.map((control, index) => {
                                  return (
                                    <List.Item
                                      key={index}
                                      _marker={{ color: "inherit" }}
                                    >
                                      {control}
                                    </List.Item>
                                  );
                                })}
                            </List.Root>
                          </Flex>

                          <Flex direction={"column"}>
                            <Text
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              bgClip="text"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              Gameplay
                            </Text>

                            <List.Root
                              as={"ul"}
                              listStyle={"decimal"}
                              p={3}
                              ps="5"
                            >
                              {selectedGame &&
                                selectedGame.gameplay &&
                                selectedGame.gameplay.map((gameplay, index) => {
                                  return (
                                    <List.Item
                                      key={index}
                                      _marker={{ color: "inherit" }}
                                    >
                                      {gameplay}
                                    </List.Item>
                                  );
                                })}
                            </List.Root>
                          </Flex>

                          <Flex direction={"column"}>
                            <Text
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              bgClip="text"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              End Of Game
                            </Text>
                            <Text color={"white"}>{selectedGame?.endgame}</Text>
                          </Flex>

                          <Flex direction={"column"}>
                            <Text
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              bgClip="text"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              Point System
                            </Text>

                            <List.Root
                              as={"ul"}
                              listStyle={"decimal"}
                              p={3}
                              ps="5"
                            >
                              {selectedGame &&
                                selectedGame.pointSystem &&
                                selectedGame.pointSystem.map(
                                  (pointSystem, index) => {
                                    return (
                                      <List.Item
                                        key={index}
                                        _marker={{ color: "inherit" }}
                                      >
                                        {pointSystem}
                                      </List.Item>
                                    );
                                  }
                                )}
                            </List.Root>
                          </Flex>

                          <Flex direction={"column"}>
                            <Text
                              bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                              bgClip="text"
                              fontSize="16px"
                              fontWeight={"bold"}
                            >
                              Bonus Points
                            </Text>

                            <List.Root
                              as={"ul"}
                              listStyle={"decimal"}
                              p={3}
                              ps="5"
                            >
                              {selectedGame &&
                                selectedGame.pointSystem &&
                                selectedGame.pointSystem.map(
                                  (pointSystem, index) => {
                                    return (
                                      <List.Item
                                        key={index}
                                        _marker={{ color: "inherit" }}
                                      >
                                        {pointSystem}
                                      </List.Item>
                                    );
                                  }
                                )}
                            </List.Root>
                          </Flex>

                          {selectedGame && selectedGame.leaderboard && (
                            <Flex direction={"column"}>
                              <Text
                                bgGradient="conic-gradient(from 180deg at 50% 50%, #4AAAFF 0deg, #1018BD 72deg, #469EEC 144deg, #95A3FF 216deg, #1018BD 288deg, #4AAAFF 360deg)"
                                bgClip="text"
                                fontSize="16px"
                                fontWeight={"bold"}
                              >
                                Leaderboard
                              </Text>

                              <List.Root
                                as={"ul"}
                                listStyle={"decimal"}
                                p={3}
                                ps="5"
                              >
                                {selectedGame &&
                                  selectedGame.leaderboard &&
                                  selectedGame.leaderboard.map(
                                    (leaderboard, index) => {
                                      return (
                                        <List.Item
                                          key={index}
                                          _marker={{ color: "inherit" }}
                                        >
                                          {leaderboard}
                                        </List.Item>
                                      );
                                    }
                                  )}
                              </List.Root>
                            </Flex>
                          )}
                        </Flex>
                      </DrawerBody>
                      <DrawerCloseTrigger />
                    </DrawerContent>
                  </DrawerRoot>
                </Flex>
              </Card.Body>
            </Card.Root>
          ))}
      </Flex>

      <BottomNav />
    </Flex>
  );
}

export default page;
