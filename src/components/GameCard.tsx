import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading size="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
