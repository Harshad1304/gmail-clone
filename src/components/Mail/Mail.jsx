import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import {
  ArrowBack,
  MoveToInbox as MoveToInboxIcon,
  Error as ErrorIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  WatchLater as WatchLaterIcon,
  CheckCircle as CheckCircleIcon,
  LabelImportant as LabelImportantIcon,
  MoreVert as MoreVertIcon,
  UnfoldMore as UnfoldMoreIcon,
  Print as PrintIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Mail() {
    const navigate = useNavigate()
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-tools-left">
          <IconButton onClick={()=>navigate("/")}>
            <ArrowBack  />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail-tools-right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-body-header">
            <h2>Subject</h2>
            <LabelImportantIcon className="mail-important-icon" />
            <p>Title</p>
            <p className="mail-time">10:00 PM</p>
        </div>
        <div className="mail-message">
            <p>This is a message</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
