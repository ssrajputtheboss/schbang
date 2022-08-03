import { IconButton, Button, InputGroup, InputRightElement, Input, Icon } from '@chakra-ui/react';
import { CgAttachment, CgSmile } from 'react-icons/cg';
export default function BottomMessageBar({}) {
  return (
    <InputGroup
      size='sm'
      position='fixed'
      maxW='420px'
      bg='#242629'
      bottom={2}
      alignSelf='center'
      justifySelf='center'>
      <Input placeholder='Type your message here...' />
      <InputRightElement>
        <IconButton icon={<CgAttachment color='white' />} bg='transparent' />
        <IconButton icon={<CgSmile color='white' />} bg='transparent' />
        <Button variantColor='teal' variant='solid' bg='#4FA2FF' onClick={() => {}}>
          Post
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
