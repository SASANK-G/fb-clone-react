import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {

  
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }



  return (
    <div className="messageSender">
      <div className = "messageSender__top">
                <Avatar 
                        src = ""

                />
                <form>
                    <input 
                        value = ""
                        onChange = { (e) => setInput(e.target.value)}
                        className = "messageSender__input"
                        placeholder = {`What's on your mind ?`}
                    />
                    <input 
                        value = ""
                        onChange = { (e) => setImageUrl(e.target.value)}
                        placeholder = "image URL (optional)"
                    />
                    <button onClick = {handleSubmit} type = "submit">Hidden Submit</button>
                </form>
            </div>

            <div className = "messageSender__bottom">
                 <div className = "messageSender__options">
                    <VideocamIcon style = {{ color: "red"}}/>
                    <h3>Live video</h3>
                 </div>
                 <div className = "messageSender__options">
                    <PhotoLibraryIcon style = {{ color: "green"}} />
                    <h3>Photo/Video</h3>
                 </div>
                 <div className = "messageSender__options">
                    <InsertEmoticonIcon style = {{ color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                 </div>        
            </div>


    </div>
  )
}

export default MessageSender;