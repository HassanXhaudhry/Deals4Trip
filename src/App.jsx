import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css';
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import Deals from './pages/Deals';
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import ChatAI from "./components/ChatAI";
import Map from "./pages/Map";
import BookDeal from "./pages/subPages/BookDeal";
import Login from './components/Login'
import UserHome from "./userPages/UserHome";
import JourneyPlanner from "./userPages/JourneyPlanner";
import UserDashboard from "./userPages/UserDashboard";
import PastJourneys from "./userPages/PastJourneys";
import SavedPlaces from './userPages/SavedPlaces';
import UserProfile from './userPages/UserProfile';
import ReserveHotel from "./pages/subPages/ReserveHotel";
import CompleteBooking from "./pages/subPages/CompleteBooking";



const App = () => {
  return (
    <div className='font-Poppins'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aichat" element={<ChatAI />} />
        <Route path="/map" element={<Map />} />
        <Route path="/bookDeal" element={<BookDeal />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/login" element={<Login />}/>
        <Route path='/userhome' element={<UserHome />}/>
        <Route path="/journeyplanner" element={<JourneyPlanner />}/>
        <Route path="/dashboard" element={<UserDashboard />}/>
        <Route path="/pastjourneys" element={<PastJourneys />}/>
        <Route path="/savedplaces" element={<SavedPlaces />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="/bookDeal/reservehotel" element={<ReserveHotel />}/>
        <Route path="/bookDeal/reservehotel/completebooking" element={<CompleteBooking />}/>
      </Routes>
    </div>
  );
};

export default App;
