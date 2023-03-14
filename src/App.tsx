import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/home/Home';
import {UserProvider} from './services/UserContext';
import Login from './pages/login';
import Signup from './pages/signup';


function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element = {<Signup />}></Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
