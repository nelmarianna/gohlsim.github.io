import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/pages/Home';
import Layout from './layout/Layout'


function App() {
  return (
    
    <div className='App'>
    <Router>
    <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        </Layout>
    </Router>
  </div>
  );
}

export default App;
