import React from 'react'
import './SendMail.css'
import { Close as CloseIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function SendMail() {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const onSubmit = (formData)=>{
        console.log(formData)
        const emailCollection = collection(db,"emails")
        addDoc(emailCollection,{
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timeStamp:serverTimestamp(),
        })
    dispatch(closeSendMessage())  
    };

    const dispatch = useDispatch()
  return (
    <div className='send-mail'>
        <div className="mail-header">
            <h3>New Message</h3>
            <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="mail-close-icon"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to'  placeholder='To  :-' type="email" {...register('to',{required:true})} />

            {errors.to && <p className="send-mail-error">To is required</p>}

            <input name='subject' placeholder='Subject  :-' type="text" {...register('subject',{required:true})} />
            {errors.subject && <p className="send-mail-error">Subject is required</p>}
            <input name='message' className='send-mail-message' placeholder='Message :- ' type="text" {...register('message',{required:true})}/>
            {errors.message && <p className="send-mail-error">Message is required</p>}

            <div className="send-mail-options">
                <Button 
                 variant='contained'
                 color='primary'
                 type='submit'
                 className='mail-send-btn' >Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail