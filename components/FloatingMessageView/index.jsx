import { Box, Text, Flex, IconButton, Divider, Avatar } from '@chakra-ui/react';
import { useState } from 'react';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
export default function FloatingMessageView({}) {
  const [isOpen, setOpen] = useState(false);
  const messageList = [
    {
      name: 'User',
      position: 'Manager',
      lastMessage: 'Hello',
      profileURL: 'https://i.pravatar.cc/300'
    },
    {
      name: 'User',
      position: 'Manager',
      lastMessage: 'Hello',
      profileURL: 'https://i.pravatar.cc/300'
    },
    {
      name: 'User',
      position: 'Manager',
      lastMessage: 'Hello',
      profileURL: 'https://i.pravatar.cc/300'
    }
  ];
  return (
    <Flex
      w='400px'
      flexDir='column'
      position='fixed'
      bottom='1'
      right='1'
      bg='transparent'
      color='#FFFFFF'>
      <Flex
        borderTopRadius={12}
        borderBottomRadius={!isOpen && 12}
        justifyContent='space-between'
        alignItems='center'
        p={4}
        mb={1}
        bg='#242629'>
        <Text fontSize='md' fontWeight='md'>
          Direct Messages
        </Text>
        <IconButton
          bg='transparent'
          icon={isOpen ? <BiDownArrow /> : <BiUpArrow />}
          onClick={() => setOpen(!isOpen)}></IconButton>
      </Flex>
      {isOpen && messageList.map((message, index) => <MessageView key={index} {...message} />)}
    </Flex>
  );
}

function MessageView({ key, profileURL, name, position, lastMessage }) {
  return (
    <Flex flexDir='column' key={key} p={4} mb={1} bg='#242629'>
      <Flex alignItems='center'>
        <Avatar src={profileURL} />
        <Flex flexDir='column' ml={2} justifyContent='space-between'>
          <Text>{name}</Text>
          <Text fontSize='sm'>{position}</Text>
        </Flex>
      </Flex>
      <Text fontSize='sm' color='gray.500'>
        {lastMessage}
      </Text>
    </Flex>
  );
}
