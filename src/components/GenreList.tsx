import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, loading } = useGenres();
  if (loading) {
    return <Spinner></Spinner>
  }
  return (
    <List>
      {genres.map((genresItem) => (
        <ListItem key={genresItem.id}  py={2}>
          <HStack>
            <Image src={genresItem.image_background} boxSize={10} borderRadius={10} objectFit="cover"></Image>
            <Text fontSize={18}>{genresItem.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
