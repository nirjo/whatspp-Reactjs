import React, { useState, useEffect } from "react";

import { Avatar, IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";

import "./chat.css";

// add props addNewChat
function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="Chat">
      <div className="Chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="Chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="Chat__headerRight">
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

      <div className="Chat__body">
        <p className={`Chat__message ${true &&'chat__receiver'}`}>
          <span className=" Chat__name "> Nirmal </span>
          Hey Guys
          <span className="Chat_timestamp">7:09pm</span>
        </p>
      </div>

      <div className="Chat__footer"> </div>
      <InsertEmoticonIcon />
      <form>
      <input type ="text" />
      <button>Send a Message</button>
      
      </form>
      <MicIcon />

    </div>
  );
}

export default Chat;
