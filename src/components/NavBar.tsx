import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamezlogo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack padding={5} gap={5}>
      <Image
        src={logo}
        width={"100px"}
        objectFit={"cover"}
        backgroundColor={"var(--yellow)"}
        padding={"10px"}
        borderRadius={3}
      ></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
