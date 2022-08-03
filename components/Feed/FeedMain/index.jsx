import { Flex } from '@chakra-ui/react';
import Post from './Post';
import BottomMessageBar from './BottomMessageBar';
export default function FeedMain() {
  const posts = [
    {
      isPinned: true,
      name: 'Admin',
      profileUrl: 'https://i.pravatar.cc/300',
      time: '1 hour ago',
      type: 'event',
      attachments: [{ type: 'file', metadata: { name: 'file.pdf', size: '1.5MB' } }],
      noOfComments: 0,
      noOfShares: 0,
      noOfLikes: 0,
      id: '1',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book. It has survived not only five centuries, but also the leap into 
       electronic typesetting, remaining essentially unchanged. It was popularised in 
       the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
       and more recently with desktop publishing software like Aldus PageMaker including 
       versions of Lorem Ipsum.`
    },
    {
      isPinned: true,
      name: 'Admin',
      profileUrl: 'https://i.pravatar.cc/300',
      time: '1 hour ago',
      type: 'event',
      attachments: [{ type: 'file', metadata: { name: 'file.pdf', size: '1.5MB' } }],
      noOfComments: 0,
      noOfShares: 0,
      noOfLikes: 0,
      id: '1',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book. It has survived not only five centuries, but also the leap into 
       electronic typesetting, remaining essentially unchanged. It was popularised in 
       the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
       and more recently with desktop publishing software like Aldus PageMaker including 
       versions of Lorem Ipsum.`
    }
  ];
  return (
    <Flex flexDir='column'>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <BottomMessageBar />
    </Flex>
  );
}
