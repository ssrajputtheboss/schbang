import { Box, Text, Flex, Wrap, Button } from '@chakra-ui/react';
import { MdAnnouncement, MdList } from 'react-icons/md';
import { AiOutlineFire } from 'react-icons/ai';
import { FaMedal } from 'react-icons/fa';
import { PostTypes } from '../FeedMain/Post';
import { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { setFilter } from '../../../store/reducers';
export default function RightBar({}) {
  const store = useStore();
  const state = store.getState().appState;
  const dispatch = useDispatch();
  const [activeType, setActiveType] = useState('');
  const buttons = [
    { icon: <MdList color='#94A1B2' />, text: 'All', type: '' },
    {
      icon: <MdAnnouncement color='#94A1B2' />,
      text: 'Announcement',
      type: PostTypes.announcement
    },
    { icon: <FaMedal color='#94A1B2' />, text: 'Promotion', type: PostTypes.promotion },
    { icon: <AiOutlineFire color='#94A1B2' />, text: 'Shout out!', type: PostTypes.shoutOut },
    { icon: <MdAnnouncement color='#94A1B2' />, text: 'Event', type: PostTypes.event }
  ];
  return (
    <Box>
      <Wrap>
        {buttons.map((button, index) => (
          <FilterButton
            key={index}
            {...button}
            isACtive={activeType === button.type}
            onClick={() => {
              if (
                button.type === state.postFilter ||
                !Object.values(PostTypes).includes(button.type)
              ) {
                dispatch(setFilter(null));
                setActiveType('');
              } else {
                dispatch(setFilter(button.type));
                setActiveType(button.type);
              }
            }}
          />
        ))}
      </Wrap>
      <PinnedMessage />
    </Box>
  );
}

function FilterButton({ icon, text, onClick, isACtive }) {
  return (
    <Button
      as={Flex}
      border='3px solid #94A1B2'
      px={3}
      py={1}
      bg={isACtive ? 'darkblue' : 'transparent'}
      onClick={onClick}
      borderRadius='50px'
      width='fit-content'
      alignItems='center'
      justifyContent='center'>
      {icon}
      <Text ml={2} color='#94A1B2'>
        {text}
      </Text>
    </Button>
  );
}

function PinnedMessage({}) {
  return (
    <Flex alignItems='center' color='#94A1B2' border='1px solid #94A1B2 50px'>
      <MdAnnouncement />
      <Text ml={2}>Message pinned by admin</Text>
    </Flex>
  );
}
