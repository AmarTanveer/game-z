import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { error, games, loading } = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {loading ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton}></GameCardSkeleton>) :
        games.map((game) => (
           <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
