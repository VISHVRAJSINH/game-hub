import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge paddingX="5px" fontSize="14px" variant="subtle" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
