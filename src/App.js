import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Component/ChatFeed';
import LoginForm from './Component/LoginForm';
// import MessageForm from './Component/MessageForm';
 


  function App() {

      if(!localStorage.getItem('username')) {
        return <LoginForm/>
      }

  return (
<div>  
        <ChatEngine 
  
        height = "100vh"
        projectID ="83ee38e7-fb2b-454a-9c77-ad9b15cbaa60"
        userName = {localStorage.getItem("username")}
        userSecret ={localStorage.getItem("password")}
        renderChatFeed = {(ChatAppProps) => <ChatFeed {...ChatAppProps}/> }
        onNewMessage = { () => new Audio('mixkit-access-allowed-tone-2869.wav').play()}
        
        />
        </div>
       
      
  );
}

export default App;
