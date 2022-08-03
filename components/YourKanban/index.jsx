import { Flex, Box } from '@chakra-ui/react';
import LeftBar from '../LeftBar';
import TopBar from '../TopBar';
import FloatingMessageView from '../FloatingMessageView';
import ToDo from './ToDo';
export default function Feed() {
  return (
    <Flex flexDir='column' height='100%' bg='#16161A'>
      <TopBar />
      <Flex w='100%'>
        <Box w='30%' px={10}>
          <LeftBar />
        </Box>
        <Box w='70%' pl={10}>
          <ToDo />
        </Box>
      </Flex>
      <FloatingMessageView />
    </Flex>
  );
}
