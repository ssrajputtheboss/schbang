import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { BsBox, BsTrophy } from 'react-icons/bs';
import { BiBook } from 'react-icons/bi';
import { MdAnnouncement } from 'react-icons/md';
import { GrGroup } from 'react-icons/gr';
import { useStore, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
export default function LeftBar({}) {
  return (
    <Box color=' #FFFFFF'>
      <Profile />
      <Navigation />
    </Box>
  );
}

function Profile({}) {
  return (
    <Flex alignItems='center' justifyItems='start' flexDir='column'>
      <Image src='https://picsum.photos/200' alt='Profile Image'></Image>
      <Text fontSize='lg' fontWeight='bold'>
        Wade Warren
      </Text>
      <Text mb={5} fontSize='sm'>
        UX Designer II
      </Text>
    </Flex>
  );
}

function Navigation({}) {
  const store = useStore();
  //const path = store.getState().appState.path;
  const router = useRouter();
  const dispatch = useDispatch();
  function changePath(newPath) {
    if (router.path !== newPath) {
      router.push(newPath);
      //dispatch(changePath(newPath));
    }
  }
  const navButtons = [
    { icon: <GrGroup />, title: 'Community', path: '/feed' },
    { icon: <BsBox />, title: 'Your Kanban', path: '/kanban' },
    { icon: <BiBook />, title: 'keep Learning', path: '/learning' },
    { icon: <MdAnnouncement />, title: 'Events', path: '/events' },
    { icon: <BsTrophy />, title: 'Rewards', path: '/rewards' }
  ];
  return (
    <Flex flexDir='column'>
      {navButtons.map((button, index) => (
        <NavButton key={index} k={index} {...button} onClick={() => changePath(button.path)} />
      ))}
    </Flex>
  );
}

function NavButton({ k, icon, title, path, onClick }) {
  const router = useRouter();
  console.log('key', k);
  return (
    <Flex
      key={k}
      bg={path === router.pathname ? '#4FA2FF' : '#242629'}
      borderWidth='1px'
      borderStyle='solid'
      borderColor='#94A1B2'
      borderTopRadius={path === '/feed' && '10px'}
      borderBottomRadius={path === '/rewards' && '10px'}
      p={4}
      alignItems='center'
      color='#FFFFFF'
      cursor='pointer'
      onClick={onClick}>
      {icon}
      <Text ml={5}>{title}</Text>
    </Flex>
  );
}
