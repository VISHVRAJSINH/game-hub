import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={4}
      paddingY={4}
    >
      {isLoading &&
        Skeleton.map((item) => (
          <GameCardContainer key={item}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((item) => (
        <GameCardContainer key={item.id}>
          <GameCard game={item} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
