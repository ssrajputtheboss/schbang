import { IconButton, Button, InputGroup, InputRightElement, Input, Icon } from '@chakra-ui/react';
import { useRef } from 'react';
import { CgAttachment, CgSmile } from 'react-icons/cg';
import { useStore } from 'react-redux';
import { addPost, getPosts } from '../../../../api/login';
import { getPostsAsync } from '../../../../store/reducers/';
import { PostTypes } from '../Post';
export default function BottomMessageBar({}) {
  const inputRef = useRef('');
  const store = useStore();
  return (
    <InputGroup
      size='sm'
      position='fixed'
      maxW='420px'
      bg='#242629'
      bottom={2}
      alignSelf='center'
      justifySelf='center'>
      <Input ref={inputRef} placeholder='Type your message here...' />
      <InputRightElement>
        <IconButton icon={<CgAttachment color='white' />} bg='transparent' />
        <IconButton icon={<CgSmile color='white' />} bg='transparent' />
        <Button
          variantColor='teal'
          variant='solid'
          bg='#4FA2FF'
          onClick={() => {
            addPost({
              text: inputRef.current.value,
              organisation: 'general'
            })
              .then((res) => store.dispatch(getPostsAsync()))
              .catch((err) => alert(err));
            inputRef.current.value = '';
          }}>
          Post
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
