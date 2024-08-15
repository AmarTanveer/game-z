import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface Props {
    game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} height={"180px"} objectFit={"cover"}></Image>
        <CardBody>
            <Heading fontSize={"xl"}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
