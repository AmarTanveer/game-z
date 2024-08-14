import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/gamezlogo.png"

function NavBar() {
  return (
    <HStack>
        <Image src={logo} width={"150px"} objectFit={"cover"} backgroundColor={"#FFC600"} padding={"10px"}></Image>
        <Text fontSize="3xl" fontWeight={"1000"}>NavBar</Text>
    </HStack>
  )
}

export default NavBar
