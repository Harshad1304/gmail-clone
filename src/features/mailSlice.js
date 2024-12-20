import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
    name:'mail',
    initialState:{
        selectedMail:null,
        sendMessageIsOpen: false,
    },
    reducers:{
        selectMail:(state,action)=>{
            state.selectedMail = action.payload;
        },
        openSendMessage:(state)=>{
            state.sendMessageIsOpen = true;
        },
        closeSendMessage:(state)=>{
            state.sendMessageIsOpen = false;
        }
    }
});


export const {openSendMessage,selectMail,closeSendMessage } = mailSlice.actions

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen
export default mailSlice.reducer