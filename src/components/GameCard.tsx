import { Card, CardBody, Heading, Image, Icon, HStack, Badge } from "@chakra-ui/react";
import {
  FaXbox,
  FaPlaystation,
  FaSteam,
  FaLinux,
  FaAndroid,
  FaAppStoreIos,
  FaGlobe
} from "react-icons/fa";
import {
  SiMacos,
  SiPlaystation3,
  SiPlaystation2,
  SiPlaystation4,
  SiPlaystation5,
  SiPlaystationvita
} from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import { Game } from "../hooks/useGames";
import { IconType } from "react-icons";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const platformIcons: { [key: string]: IconType } = {
    playstation5: SiPlaystation5,
    playstation4: SiPlaystation4,
    playstation3: SiPlaystation3,
    playstation2: SiPlaystation2,
    playstation: FaPlaystation,
    "ps-vita": SiPlaystationvita,
    pc: FaSteam,
    macos: SiMacos,
    mac: SiMacos,
    ios: FaAppStoreIos,
    "xbox-series-x": FaXbox,
    "xbox-one": FaXbox,
    "xbox-old": FaXbox,
    "xbox-store": FaXbox,
    xbox360: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    "nintendo-switch": BsNintendoSwitch,
    web: FaGlobe
  };
  return (
    <Card width={"300px"} borderRadius={10} overflow={"hidden"}>
      <Image
        src={game.background_image}
        height={"180px"}
        objectFit={"cover"}
      ></Image>
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"} alignItems={"start"} my={3}>
        <HStack  wrap={"wrap"}>
          {game.platforms.map((platform) => (
            <Badge
            key={platform.platform.id}
              boxSize={7}
              padding={1}
              colorScheme={"purple"}
              borderRadius={10}
              as={platformIcons[platform.platform.slug]}
            ></Badge>
          ))}
        </HStack>
        <HStack>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
