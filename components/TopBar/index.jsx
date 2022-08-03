import { Flex, Avatar, Input, Text, Link } from '@chakra-ui/react';
export default function TopBar({}) {
  return (
    <Flex justifyContent='space-between' p={2} m={2} color='#FFFFFF'>
      <Flex alignItems='center'>
        <Avatar ml={3} mr={5} />
        <Input placeholder='Search' />
      </Flex>
      <Flex justifyContent='space-between'>
        <Link>
          <Text>Repository</Text>
        </Link>
        <Link ml={10}>
          <Text>Orgnisation Map</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
