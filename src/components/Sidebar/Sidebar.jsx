import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";

// Icons
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption.jsx";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar-compose-btn"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        title="Inbox"
        Icon={InboxIcon}
        number={54}
        selected={true}
      />
      <SidebarOption title="Starred" Icon={StarIcon} number={54} />
      <SidebarOption title="Snoozed" Icon={AccessTimeIcon} number={10} />
      <SidebarOption title="Important" Icon={LabelImportantIcon} number={5} />
      <SidebarOption title="Sent" Icon={NearMeIcon} number={3} />
      <SidebarOption title="Drafts" Icon={NoteIcon} number={7} />
      <SidebarOption title="More" Icon={ExpandMoreIcon} number={2} />
      <div className="sidear-footer-options">
        <div className="sidebar-footer-icons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
