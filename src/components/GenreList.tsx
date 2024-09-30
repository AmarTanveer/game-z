import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
function GenreList({onSelectGenre}: Props) {
  const { genres, loading } = useGenres();
  if (loading) {
    return <Spinner></Spinner>
  }
  return (
    <List>
      {genres.map((genresItem) => (
        <ListItem onClick={() => {onSelectGenre(genresItem)}} key={genresItem.id} py={2} _hover={{backgroundColor: "gray.900", padding:"10px", borderRadius:"18px"}}> 
          <HStack >
            <Image src={genresItem.image_background} boxSize={10} borderRadius={10} objectFit="cover"></Image>
            <Text fontSize={18}>{genresItem.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
