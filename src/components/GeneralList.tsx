import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GeneralList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY="4px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(item.image_background)}
            />
            <Text fontSize={"large"}>{item.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GeneralList;
