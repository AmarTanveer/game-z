import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamezlogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image
        src={logo}
        width={"150px"}
        objectFit={"cover"}
        backgroundColor={"var(--yellow)"}
        padding={"10px"}
      ></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
