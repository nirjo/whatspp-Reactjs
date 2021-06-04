import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";

function Sidebar()  {
    const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/nirmal${seed}.svg`} />
        <chat />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        </div>

        <div className="sidebar_search">
        
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <Sidebarchat addNewChat />
                <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />
        <Sidebarchat />

      </div>
    </div>
  );
}

export default Sidebar;
