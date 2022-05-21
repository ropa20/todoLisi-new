import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/reminders"
import All from "./components/all"
import Scheduled from "./components/scheduled"
import Today from "./components/today"



import Home from './components/home'
const App=()=> {

    return ( 
        <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
          <Route path="/toDo" element={<Todo />} />
          <Route path="/all" element={<All />} />
          <Route path="/scheduled" element={<Scheduled />} />
          <Route path="/today" element={<Today />} />
          {/* <Route path="/toDo" element={<TodoList />} /> */}

          <Route path="*" element={<div>NO PAGE</div>} />
        
      </Routes>
    </BrowserRouter>
        
     );
}

export default App ;