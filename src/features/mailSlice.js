import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
    name:'mail',
    initialState:{
        sendMessageIsOpen: false,
    },
    reducers:{
        openSendMessage:(state)=>{
            state.sendMessageIsOpen = true;
        },
        closeSendMessage:(state)=>{
            state.sendMessageIsOpen = false;
        }
    }
});


export const {openSendMessage,closeSendMessage } = mailSlice.actions

export const selectmail = state => state.mail.sendMessageIsOpen

export default mailSlice.reducer