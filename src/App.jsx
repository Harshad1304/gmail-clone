import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Mail from './components/Mail/Mail.jsx';
import EmailList from './components/EmailList/EmailList.jsx';
import SendMail from './components/SendMail/SendMail.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app-body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
