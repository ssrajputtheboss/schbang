import { Box, Text, Flex, Wrap } from '@chakra-ui/react';
import { MdAnnouncement } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';
import { FaMedal } from 'react-icons/fa';
export default function RightBar({}) {
  const buttons = [
    { icon: <MdAnnouncement color='#94A1B2' />, text: 'Announcement' },
    { icon: <FaMedal color='#94A1B2' />, text: 'Promotion' },
    { icon: <AiOutlineFire color='#94A1B2' />, text: 'Shout out!' },
    { icon: <MdAnnouncement color='#94A1B2' />, text: 'Event' }
  ];
  return (
    <>
      <Wrap>
        {buttons.map((button, index) => (
          <FilterButton key={index} {...button} />
        ))}
      </Wrap>
    </>
  );
}

function FilterButton({ key, icon, text }) {
  return (
    <Flex
      border='3px solid #94A1B2'
      px={3}
      py={1}
      borderRadius='50px'
      width='fit-content'
      alignItems='center'
      justifyContent='center'>
      {icon}
      <Text ml={2} color='#94A1B2'>
        {text}
      </Text>
    </Flex>
  );
}

function PinnedMessage({}) {
  return (
    <Box alignItems='center'>
      <MdAnnouncement />
      <Text ml={2}>Message pinned by admin</Text>
    </Box>
  );
}
