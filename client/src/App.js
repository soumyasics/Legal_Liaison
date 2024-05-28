import LandingCarousel from './Components/LandingPage/LandingCarousel';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingNavbar from './Components/LandingPage/LandingNavbar';
import LandingServices from './Components/LandingPage/LandingServices';
import UserLogin from './Components/User/UserLogin';
import UserRegistration from './Components/User/UserRegistration'
import AdvcateReg from './Components/Advocates/AdvocateReg';
import AdvocateLogin from './Components/Advocates/AdvocateLogin';
import BarCouncilLogin from './Components/BarCouncil/BarCouncilLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import FormHead from './Components/Common/FormHead';
import AdminSidebar from './Components/Admin/AdminSidebar';
import AdminFooter from './Components/Admin/AdminFooter';
import UserFooter from './Components/Common/UserFooter';
function App() {
  return (
      <BrowserRouter basename='legal_liaison' >
    <div>
      <Routes>
        {/* User routes */}

      <Route path='/' element={(<LandingNavbar/>,<LandingCarousel/>)} />
      <Route path='/UserLogin' element={[<LandingNavbar/>,<FormHead title='Home / User Login' />,<UserLogin/>]} />
      <Route path='/UserRegistration' element={[<LandingNavbar/>,<FormHead title='User Registration Form' />,<UserRegistration/>]} />
      <Route path='/userfooter' element={<UserFooter/>}/>

      {/* Advocate routes */}

      <Route path='/AdvcateReg' element={[<LandingNavbar/>,<AdvcateReg/>]} />
      <Route path='/AdvocateLogin' element={[<LandingNavbar/>,<AdvocateLogin/>]} />

    {/* Bar council routes */}

      <Route path='/BarCouncilLogin' element={[<LandingNavbar/>,<BarCouncilLogin/>]} />

    {/* Admin routes */}
      <Route path='/AdminLogin' element={[<LandingNavbar/>,<FormHead title='Admin Login' />,<AdminLogin/>]} />
      <Route path='/admin-dashboard' element={[<LandingNavbar/>,<AdminSidebar/>,<AdminFooter/>]}/>
      <Route path='/adminsidebar' element={<AdminSidebar/>}/>
      <Route path='/adminfooter' element={<AdminFooter/>}/>



      </Routes>
</div>
</BrowserRouter>

  );
}

export default App;
