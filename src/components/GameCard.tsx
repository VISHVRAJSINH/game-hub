import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          w="100%"
          h="100%"
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={4}>
            <PlatformIconList
              platforms={game.parent_platforms.map((item) => item.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading noOfLines={2} size="lg" h="80px">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
