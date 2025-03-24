import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from './Pages/Main';
import History from './Pages/History';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Main/>} />
      <Route path="/history" element ={<History/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

1.make a grid 2 out of 10 grid space should be a collapsable and must show past conversations and on mobile it must collapse to a burger and only chat should be shown

2.an input at the bottom of the page with ask and save, how does the chat automatically scoll up? whenever asked with the question an avatar image should be shown when replying Ai-bot image should be shown.

3. there should be cards that show automatic response 
4. A modal should be shown for Feedback
5. An image of the chatBot with new Chat and a button that starts a new chat must be there

5. A conversation history page must be there
6. A conversation Card must be there with thumbs up and down and time of the message that is to be sent there.

7.past conversations should be stored in local storage






1.Create input field with placeholder "Message Bot AI..." and a submit button
2.Implement response mechanism showing "Soul AI" as the sender
3.Add static JSON data for predefined questions and answers
4.Show "Sorry, Did not understand your query!" for unknown questions
5.Implement specific response for "Can you explain RESTful APIs?" question
6.Create a Past Conversations page at "/history" route
7.Store conversations in localStorage for persistence across refreshes
8.Add a "New Chat" button linking to homepage "/"
9.Create header with "Bot AI" title
10.Build form handling for user message submission
11.Implement navigation between main chat and history pages


*/