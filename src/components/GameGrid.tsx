import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platforms | null;
  searchText: string;
}

function GameGrid({selectedGenre, selectedPlatform, searchText} : Props) {
  const { error, games, loading } = useGames(selectedGenre, selectedPlatform, searchText );
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding={5}
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
