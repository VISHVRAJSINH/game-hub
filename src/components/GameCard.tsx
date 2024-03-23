import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={8} overflow="hidden">
        <Image src={game.background_image} w="100%" h="250px" />
        <CardBody>
          <Heading size="lg" h="80px">
            {game.name}
          </Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((item) => item.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
