import { Box, Flex, Text, Divider, Button, Icon, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiCheckCircle, BiTimer } from 'react-icons/bi';
import { useStore } from 'react-redux';
import { getToDosAsync } from '../../../store/reducers';
import AddToDo from '../AddToDo';
const ToDoStatus = {
  done: 'Done',
  inProgress: 'In Progress',
  inReview: 'In Review',
  created: 'Created'
};

const Flags = {
  urgent: 'Urgent',
  important: 'Important',
  doIt: 'Do It'
};

export default function ToDo() {
  const store = useStore();
  const [todos, setTodos] = useState(store.getState().appState.todos);
  store.subscribe(
    () =>
      todos.length !== store.getState().appState.todos.length &&
      setTodos(store.getState().appState.todos)
  );
  useEffect(() => {
    store.dispatch(getToDosAsync());
  }, []);
  if (todos.length === 0)
    return (
      <Flex flexDir='column' h='100%' justifyContent='center' alignItems='center'>
        <Heading mb={5} textAlign='center' w='100%'>
          It{"'"}s Empty For Now!
        </Heading>
        <AddToDo />
      </Flex>
    );
  return (
    <Flex alignItems='start' h='100%' overflow='scroll' className='noScroll' color='#FFFFFF'>
      <ToDoList listTitle='To Do' todos={todos} />
      <ToDoList
        listTitle='In Progress'
        todos={todos.filter((e) => e.status === ToDoStatus.inProgress)}
      />
      <ToDoList
        listTitle='In Review'
        todos={todos.filter((e) => e.status === ToDoStatus.inReview)}
      />
      <ToDoList listTitle='Done' todos={todos.filter((e) => e.status === ToDoStatus.done)} />
    </Flex>
  );
}

function ToDoList({ listTitle, todos }) {
  return (
    <Box m={5}>
      <Text fontSize='lg' fontWeight='bold'>
        {listTitle}
      </Text>
      {todos.map((todo, index) => (
        <ToDoItem key={todo.title + index} {...todo} />
      ))}
    </Box>
  );
}

function ToDoItem({ status, title, description, dueDate, flag, key }) {
  return (
    <Flex flexDir='column' borderRadius={12} bg='#242629' w='300px' key={key} my={5} fontSize='sm'>
      <Box p={2}>
        <Text m={2} fontWeight='medium'>
          {title}
        </Text>
        <Text m={2}>{description}</Text>
      </Box>
      <Divider />
      <Flex m={2} p={2}>
        {status === ToDoStatus.done ? (
          <Flex alignItems='center'>
            <Icon as={BiCheckCircle} size={20} color='green.500' mr={1} />
            <Text>Done</Text>
          </Flex>
        ) : (
          <Flex w='fit-content'>
            <Text borderRadius='50px' px={3} py={1} mr={3} bg={getColorByFlag(flag)}>
              {flag}
            </Text>
            <Flex alignItems='center' w='fit-content'>
              <BiTimer size={20} />
              <Text>{dueDate}</Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

function getColorByFlag(flag) {
  switch (flag) {
    case Flags.important:
      return 'red';
    case Flags.doIt:
      return 'blue';
    case Flags.urgent:
      return 'orange';
  }
}
