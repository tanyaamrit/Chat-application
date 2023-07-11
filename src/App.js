import {ChatEngine} from 'react-chat-engine'

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

import React from 'react'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
    height = "100vh"
    projectID="170e5b3e-4faa-415b-bbc2-fb50375d6ff0"
    userName="Tanya"
    userSecret="Tanya@28"
    renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}





    
    
    />
    
  )
}

export default App



