import {
  Text,
  Icon,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  Input,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalFooter
} from '@chakra-ui/react';
import { useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import { useStore } from 'react-redux';
import { addToDo } from '../../../api/login';
import { getToDosAsync } from '../../../store/reducers';
export default function AddToDo({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dueDateRef = useRef('');
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const flagRef = useRef('');
  const store = useStore();
  return (
    <Button alignItems='center' onClick={onOpen}>
      <Text>Add ToDo</Text>
      <Icon as={MdAdd} size={20} />
      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW='400px'>
          <ModalHeader>Add ToDo</ModalHeader>
          <ModalBody display='flex' flexDir='column'>
            <Input ref={titleRef} placeholder='Title' />
            <Input ref={descriptionRef} placeholder='Description' />
            <Input ref={dueDateRef} placeholder='Due Date' />
            <Input ref={flagRef} placeholder='Flag' />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => onClose()}>Cancel</Button>
            <Button
              onClick={() => {
                addToDo({
                  title: titleRef.current.value,
                  description: descriptionRef.current.value,
                  dueDate: dueDateRef.current.value,
                  flag: flagRef.current.value,
                  organisation: 'general'
                }).then((res) => {
                  store.dispatch(getToDosAsync());
                });
                onClose();
              }}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Button>
  );
}
