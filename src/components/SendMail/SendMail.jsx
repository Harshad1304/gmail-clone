import React from 'react'
import './SendMail.css'
import { Close as CloseIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function SendMail() {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const onSubmit = (formData)=>{
        console.log(formData)
        
    }
  return (
    <div className='send-mail'>
        <div className="mail-header">
            <h3>New Message</h3>
            <CloseIcon  className="mail-close-icon"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder='To  :-' type="text" {...register('to',{required:true})} />

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