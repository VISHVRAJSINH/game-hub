import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GamecardContainer = ({ children }: Props) => {
  return (
    <Box width="302.5px" borderRadius={8} overflow="hidden">
      {children}
    </Box>
  );
};

export default GamecardContainer;
