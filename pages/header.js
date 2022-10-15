import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  Link,
  Spacer,
  HStack,
} from '@chakra-ui/react'

import { EmailIcon } from '@chakra-ui/icons'
import { MdLocationOn } from 'react-icons/md'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <Flex
      mx={['12px', '230px', '230px']}
      flexDirection={['column', 'row', 'row']}
      alignItems="center"
      gap="2"
      h={['120px', '60px', '60px']}
      color="white"
      justifyContent="space-between"
      fontSize={['14px', '15px', '16px']}
    >
      <HStack p="2">
        <EmailIcon />
        <Link>
          <Text>info@example.com</Text>
        </Link>
      </HStack>
      {/* <Spacer /> */}
      <ButtonGroup
        marginBottom={['50px', '2px', '2px']}
        gap="2"
        alignItems="center"
        textAlign={['center', 'center', 'center']}
      >
        <MdLocationOn />
        <Link colorScheme="teal" href="/branches">
          Branches
        </Link>{' '}
        |
        <FaShoppingCart />
        <Link colorScheme="teal" href="/stores">
          Stores
        </Link>
        |
        <FaUserAlt />
        <Link colorScheme="teal" href="/contact us">
          Contact us
        </Link>
      </ButtonGroup>
    </Flex>
  )
}

export default Header
