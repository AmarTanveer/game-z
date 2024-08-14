import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

function ColorModeSwitch() {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
   <HStack >
    <Switch colorScheme={"yellow"} isChecked={colorMode === "dark"} onChange={toggleColorMode}></Switch>
    <Text></Text>
   </HStack>
  )
}

export default ColorModeSwitch
