import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
