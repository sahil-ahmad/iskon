import { BrowserRouter, Route, Routes } from "react-router-dom";
import Causes from "./Cause/Causes";
import CausesDetails from "./Cause/CausesDetails";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ComingSoon from "./Pages/ComingSoon";
import Error from "./Pages/Error";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyAccount from "./Pages/MyAccount";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Recover from "./Pages/Recover";
import Register from "./Pages/Register";
import Team from "./Pages/Team";
import TeamCondition from "./Pages/TeamCondition";
import Testimonial from "./Pages/Testimonial";
import Services from "./Service/Services";
import ServicesDetails from "./Service/ServicesDetails";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import RecoverPassword from "./Pages/RecoverPassword";
import Becomevolunteer from "./Pages/Becomevolunteer";
import Donation from "./Donation/Donation";
import ImplementationProcess from "./Pages/ImplementationProcess";
import Volunteer from "./Pages/Volunteer";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/aboutus"  element={<AboutUs/>}/>
          <Route path="/testimonial"  element={<Testimonial/>}/>
          <Route path="/team"  element={<Team/>}/>
          <Route path="/teamcondition"  element={<TeamCondition/>}/>
          <Route path="/recover"  element={<Recover/>}/>
          <Route path="/register"  element={<Register/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/myaccount"  element={<MyAccount/>}/>
          <Route path="/privacypolicy"  element={<PrivacyPolicy/>}/>
          <Route path="/services"  element={<Services/>}/>
          <Route path="/causes"  element={<Causes/>}/>
          <Route path="/causesdetails"  element={<CausesDetails/>}/>
          <Route path="/comingsoon"  element={<ComingSoon/>}/>
          <Route path="/error"  element={<Error/>}/>
          <Route path="/faq"  element={<Faq/>}/>
          <Route path="/servicesdetails"  element={<ServicesDetails/>}/>
          <Route path="/contactus"  element={<ContactUs/>}/>
          <Route path="/events"  element={<Events/>}/>
          <Route path="/eventdetails"  element={<EventDetails/>}/>
          <Route path="/recoverpassword"  element={<RecoverPassword/>}/>
          <Route path="/becomevolunteer"  element={<Becomevolunteer/>}/>
          <Route path="/donation"  element={<Donation/>}/>
          <Route path="implementationProcess" element= {<ImplementationProcess/>}/>
          <Route path="/volunteer" element={<Volunteer/>}/>
          






        </Routes>
      <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
