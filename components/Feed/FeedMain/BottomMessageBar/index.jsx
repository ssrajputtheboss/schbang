import {
  IconButton,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
  Textarea
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { CgAttachment, CgSmile } from 'react-icons/cg';
import { useStore } from 'react-redux';
import { addPost, getPosts } from '../../../../api/login';
import { getPostsAsync } from '../../../../store/reducers/';
import { PostTypes } from '../Post';
export default function BottomMessageBar({}) {
  const inputRef = useRef('');
  const store = useStore();
  const [rows, setRows] = useState(1);
  const maxRows = 5;
  return (
    <InputGroup
      size='sm'
      position='fixed'
      maxW='420px'
      bg='#242629'
      bottom={2}
      alignSelf='center'
      justifySelf='center'>
      <Textarea
        color='#FFFFFF'
        ref={inputRef}
        rows={rows}
        placeholder='Type your message here...'
        onInput={(e) => {
          if (e.currentTarget.value.endsWith('\n')) {
            setRows(Math.min(maxRows, rows + 1));
          }
        }}></Textarea>
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
            setRows(1);
          }}>
          Post
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
