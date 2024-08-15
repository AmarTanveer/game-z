import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return <Badge colorScheme={color} fontSize={15} px={1}>{score}</Badge>;
}

export default CriticScore;
