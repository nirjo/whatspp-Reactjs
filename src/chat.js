import React, { useState, useEffect } from "react";

import { Avatar ,IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from '@material-ui/icons/AttachFile';

import "./chat.css";

// add props addNewChat
function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  

  return  (
    <div className="Chat">
    <div className= "Chat__header">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="Chat__headerInfo">
      <h3>Room name</h3>
      <p>Last seen at ...</p>
      </div>
      <div className="Chat__headerRight" >
        <IconButton>
              <SearchIcon />
          </IconButton>
   <IconButton>
          <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
      
      </div>
      </div>
      <div className="Chat__body"> </div>
       <div className="Chat__footer"> </div>
      </div>
  );
}

export default Chat;

