import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
  return (
    <div className="feed"> 
      <StoryReel/>
      <MessageSender/>
      <Post
          key = ""
          profilePic = ""
          message = ""
          timestamp = ""
          username = ""
          image = ""
      
      />
    </div>
  )
}

export default Feed;
