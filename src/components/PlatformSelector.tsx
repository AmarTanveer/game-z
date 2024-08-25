import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"

function PlatformSelector() {
    const {platforms, error} = usePlatforms();

  if (error) return <p>{error}</p>
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>Platform</MenuButton>
        <MenuList>
          {platforms.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector
