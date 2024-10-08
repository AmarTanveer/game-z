import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(null);
  const [searchText, setSearchText] = useState("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav">
       <NavBar onSearch={searchText => setSearchText(searchText)}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} ></GameHeading>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatfrom={(platfrom) => setSelectedPlatform(platfrom)}></PlatformSelector>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} searchText={searchText} />
      </GridItem>
    </Grid>
  );
}

export default App;
