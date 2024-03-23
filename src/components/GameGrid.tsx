import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={8}
        padding="16px"
      >
        {" "}
        {isLoading &&
          Skeleton.map((item) => (
            <GamecardContainer>
              <GameCardSkeleton key={item} />
            </GamecardContainer>
          ))}
        {games.map((item) => (
          <GamecardContainer>
            <GameCard key={item.id} game={item} />
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
