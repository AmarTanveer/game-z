import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platforms | null;
}

function GameHeading({ selectedGenre, selectedPlatform }: Props) {
  const genre = selectedGenre ? `${selectedGenre.name + " "}` : "";
  const platform = selectedPlatform ? `${selectedPlatform.name + " "}` : "";

  return (
    <Heading as="h1" fontSize={45} fontWeight={800} marginLeft={5} paddingBottom={5}>
      <span style={{ color: "#FFC600" }}>{genre}</span>
      <span style={{ color: "#E900FF" }}>{platform}</span>Games
    </Heading>
  );
}

export default GameHeading;
