import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamezlogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={5}>
      <Image
        src={logo}
        width={"150px"}
        objectFit={"cover"}
        backgroundColor={"var(--yellow)"}
        padding={"10px"}
        borderRadius={3}
      ></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
