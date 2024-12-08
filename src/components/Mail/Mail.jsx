import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

function Mail() {
    const navigate = useNavigate()
    const mailData = useSelector((state)=>state.mail.selectedMail)
    console.log(mailData)

    useEffect(()=>{
        if(mailData){
            localStorage.setItem('selectedMail', JSON.stringify(mailData))
        }
    },[mailData])

    const [savedMail, setSavedMail] = useState(null);
    
    useEffect(()=>{
        const mail = localStorage.getItem('selectedMail'); //saved mail in localstorage
        if(mail){
            setSavedMail(JSON.parse(mail));
        }
    },[])

    const displayMail = mailData || savedMail;

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
            <h2>{displayMail?.subject}</h2>
            <LabelImportantIcon className="mail-important-icon" />
            <p>{displayMail?.title}</p>
            <p className="mail-time">{displayMail?.timeStamp}</p>
        </div>
        <div className="mail-message">
            <p>{displayMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
