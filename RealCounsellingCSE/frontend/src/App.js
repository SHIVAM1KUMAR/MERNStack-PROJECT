import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StateFilter from './components/StateFilter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import RegisterPage from './components/RegisterPage';
import SuccessStories from './components/SuccessStories';
import EnquiryForm from './components/EnquiryForm';// Import EnquiryForm
import ContactUs from './components/ContactUs';



import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
       
        {/* <StateFilter/> */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/success" element={<SuccessStories />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/enquiry" element={<EnquiryForm />}  /> 
            {/* Enquiry form route */}
            
          </Routes>
          <StateFilter/>
        </div>
         
        
        <Footer />

      </div>
    </Router>
  );
};

export default App;
