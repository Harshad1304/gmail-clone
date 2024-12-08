import React, { useEffect, useState } from 'react';
import './EmailList.css';
import Section from './Section.jsx';
import EmailRow from './EmailRow.jsx'
import { IconButton, Checkbox } from '@mui/material';
import {
  ArrowDropDown,
  ChevronRight,
  MoreVert,
  Redo as RedoIcon,
  ChevronLeft as ChevronLeftIcon,
  KeyboardHide as KeyboardHideIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People'; // Added import
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Added import
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase.js';

function EmailList() {

  const [emails, setEmails] = useState([]);
// console.log(emails)
  useEffect(() => {
    onSnapshot(collection(db, "emails"), (snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });
    
  }, []);


  return (
    <div className='email-list'>
      <div className="email-list-settings">
        <div className="email-list-settings-left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email-list-settings-right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="email-list-section">
          <Section Icon={InboxIcon} title='primary' color='red' selected />
          <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
          <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
        </div>
        <div className="email-list-rows">
          {emails.map(({id,data:{to, subject, message, timestamp}})=>(
            <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={
              timestamp
                ? new Date(timestamp.seconds * 1000).toUTCString()
                : "No Timestamp"
            } />
          ))}
          <EmailRow title="Youtube" subject="Hello From Youtube" description="This is a test" time="10:00pm"/>
          <EmailRow title="Youtube" subject="Hello From Youtube" description="This is a test" time="10:12pm"/>
        </div>
    </div>
  );
}

export default EmailList;
