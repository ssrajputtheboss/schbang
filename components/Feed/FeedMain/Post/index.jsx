import { Box, Flex, Image, Avatar, Text, Icon, Divider } from '@chakra-ui/react';
import { RiMapPin3Line } from 'react-icons/ri';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { GrAnnounce, GrAttachment } from 'react-icons/gr';
const bgColor = '#FDC799';
export const PostTypes = {
  announcement: 'Announcement',
  event: 'Event',
  promotion: 'Promotion',
  shoutOut: 'Shout Out'
};
export default function Post({ post }) {
  /*
    post = {
        isPinned,
        name,
        profileUrl,
        time,
        type,
        attachments: [{
            type,
            metadata
        }],
        noOfComments,
        noOfShares,
        noOfLikes,
        id,
        text,
        designation
    }
    */
  const textColor = '#FFFFFF';
  return (
    <Box bg={getPostBgColor(post.type)} p={5} borderRadius='25px' m={1}>
      {post.isPinned && (
        <Flex mb={2} alignItems='center'>
          <Icon color='#4FA2FF' as={RiMapPin3Line} mr={2} />
          <Text color='#4FA2FF'>Admin pinned a message</Text>
        </Flex>
      )}
      <Flex my={2} alignItems='center'>
        <Avatar mr={5} src={post.profileUrl}></Avatar>
        <Flex flexDir='column' justifyContent='space-between' alignItems='start'>
          <Text as='b'>{post.name}</Text>
          <Text color={textColor}>{post.time}</Text>
        </Flex>
      </Flex>
      <PostType type={post.type} />
      <Text color={textColor} my={2}>
        {post.text}
      </Text>
      {post.attachments.map((attachment, index) => (
        <AttachmentView key={index} {...attachment} />
      ))}
      <Flex px={10} py={3} mt={2} justifyContent='space-around'>
        <LikeButton noOfLikes={post.noOfLikes} />
        <Divider bg='black' h='40px' orientation='vertical' />
        <CommentButton noOfComments={post.noOfComments} />
        <Divider bg='black' h='40px' orientation='vertical' />
        <ShareButton noOfShares={post.noOfShares} />
      </Flex>
    </Box>
  );
}
const iconSize = 28;
function LikeButton({ noOfLikes }) {
  return (
    <Flex alignItems='center' justifyContent='center'>
      <Icon as={FaHeart} size={iconSize} color='red' mr={1} />
      <Text> {'  ' + noOfLikes}</Text>
    </Flex>
  );
}

function CommentButton({ noOfComments }) {
  return (
    <Flex alignItems='center' justifyContent='center'>
      <Icon as={FaComment} size={iconSize} color='teal' mr={1} />
      <Text> {'  ' + noOfComments}</Text>
    </Flex>
  );
}

function ShareButton({}) {
  return (
    <Flex alignItems='center' justifyContent='center'>
      <Icon as={FaShare} size={iconSize} color='teal' mr={1} />
      <Text> Share</Text>
    </Flex>
  );
}

function PostType({ type }) {
  let icon = GrAnnounce;
  switch (type) {
    case PostTypes.announcement:
      icon = GrAnnounce;
      break;
    case PostTypes.event:
      icon = GrAnnounce;
      break;
  }

  return (
    <Flex
      bg='#16161A'
      px={3}
      py={1}
      borderRadius='50px'
      width='fit-content'
      alignItems='center'
      justifyContent='center'>
      <Icon as={icon} color={getPostBgColor(type)} />
      <Text color={getPostBgColor(type)} ml={2}>
        {type.substring(0, 1).toUpperCase() + type.substring(1)}
      </Text>
    </Flex>
  );
}

function AttachmentView({ key, type, metadata }) {
  switch (type) {
    case 'image':
      return (
        <Image borderRadius={10} key={key} w='100%' src={metadata.url} alt='Cannot Load Image' />
      );
    case 'file':
      return (
        <Flex p={2} borderRadius={10} key={key} bg='#242629' alignItems='center'>
          <Icon as={GrAttachment} color='white' mr={1} />
          <Text as='b' color='white'>
            {metadata.name}
          </Text>
        </Flex>
      );
    default:
      return <></>;
  }
}

function getPostBgColor(type) {
  switch (type) {
    case PostTypes.announcement:
      return ' #00C39A';
    case PostTypes.promotion:
      return '#242629';
    case PostTypes.event:
      return '#FDC799';
    case PostTypes.shoutOut:
      return '#242629';
    default:
      return '#242629';
  }
}
