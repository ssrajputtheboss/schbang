import { Flex, Box } from '@chakra-ui/react';
import LeftBar from '../LeftBar';
import TopBar from '../TopBar';
import FeedMain from './FeedMain';
import RightBar from './RightBar';
import FloatingMessageView from '../FloatingMessageView';
export default function Feed() {
  return (
    <Flex flexDir='column' height='100%' bg='#16161A'>
      <TopBar />
      <Flex w='100%'>
        <Box w='30%' px={10}>
          <LeftBar />
        </Box>
        <Box w='40%' px={10}>
          <FeedMain />
        </Box>
        <Box w='30%' px={10}>
          <RightBar />
        </Box>
      </Flex>

      <FloatingMessageView />
    </Flex>
  );
}
