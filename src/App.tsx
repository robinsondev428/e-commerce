import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import {UserProvider} from './services/UserContext';
import Login from './pages/login';


function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
