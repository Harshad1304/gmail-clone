import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Mail from './components/Mail/Mail.jsx';
import EmailList from './components/EmailList/EmailList.jsx';
import SendMail from './components/SendMail/SendMail.jsx';
import Login from './components/Login/Login.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice.js';
import { login, selectUser } from './features/userSlice.js';
import { useEffect } from 'react';
import { auth } from './firebase/firebase.js';

function App() {
  const sendMessageIsOpen =useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        // the user is logged in
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }))
      }

    })
  },[])

  return (
    <Router>
      {!user?(
        <Login />
      ):(
        <div className="app">
        <Header />

        <div className="app-body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
    </Router>
  );
}

export default App;
