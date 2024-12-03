import React from 'react';
import './EmailList.css';
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

function EmailList() {
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
    </div>
  );
}

export default EmailList;
