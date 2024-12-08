import React from 'react'
import './EmailRow.css'
import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

function EmailRow({title, subject, description, time , id}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const openMail =()=>{
        dispatch(selectMail({
            title, subject, description, time , id
        }));
     navigate("/mail")
    }
  return ( 
    <div onClick={openMail} className='email-row'>
        <div className="email-row-options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlined />
            </IconButton>
            <IconButton>
                <LabelImportantOutlined />
            </IconButton>
        </div>
        <div className="email-row-title">
            <h3>{title}</h3>
        </div>
        <div className="email-row-message">
            <h4>{subject}  
                <span className="email-row-description">
                {" "}  - {description}
                </span>
            </h4>
        </div>
        <p className="email-row-time">
                {time}
        </p>
    </div>
  )
}

export default EmailRow