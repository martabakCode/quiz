import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Start from './pages/Start';
import Result from './pages/Result';
import Question from './pages/Question';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/start" element={<Start />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/question/:id" element={<Question />}/>
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;