import { Flex, Box } from '@chakra-ui/react';
import LeftBar from '../LeftBar';
import TopBar from '../TopBar';
import FloatingMessageView from '../FloatingMessageView';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
export default function Feed() {
  return (
    <Flex flexDir='column' h='100%' minH='100vh' bg='#16161A'>
      <TopBar />
      <Box position='fixed' left='5' bottom='5'>
        <AddToDo />
      </Box>
      <Flex w='100%'>
        <Box w='30%' px={10}>
          <LeftBar />
        </Box>
        <Box w='70%' pl={10}>
          <ToDo />
        </Box>
      </Flex>
    </Flex>
  );
}
