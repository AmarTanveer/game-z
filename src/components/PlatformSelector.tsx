import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platforms } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatfrom: (platfrom: Platforms) => void;
  selectedPlatform: Platforms | null;
}

function PlatformSelector({ onSelectPlatfrom, selectedPlatform }: Props) {
  const { platforms, error } = usePlatforms();

  if (error) return <p>{error}</p>;
  return (
    <Menu>
      <MenuButton marginLeft={5} as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {selectedPlatform ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          platform.name === "PlayStation"? "" : <MenuItem key={platform.id} onClick={() => {onSelectPlatfrom(platform); console.log(platform)}}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
