import { Flex } from '@chakra-ui/react';
import Post, { PostTypes } from './Post';
import BottomMessageBar from './BottomMessageBar';
import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { getPostsAsync } from '../../../store/reducers';
export default function FeedMain() {
  console.log('building feed');
  const [loading, setLoading] = useState(true);
  const store = useStore();
  const [posts, setPosts] = useState(store.getState().appState.posts);
  store.subscribe(
    () =>
      posts.length !== store.getState().appState.posts?.length &&
      setPosts(store.getState().appState.posts)
  );
  useEffect(() => {
    store.dispatch(getPostsAsync());
  }, []);
  return (
    <Flex flexDir='column'>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <BottomMessageBar />
    </Flex>
  );
}
