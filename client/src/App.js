import LandingCarousel from './Components/LandingPage/LandingCarousel';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css'
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
import UserNavbar from './Components/User/UserNavbar';
import UserHome from './Components/User/UserHome';
import AdminSidebar from './Components/Admin/AdminSidebar';
import AdminFooter from './Components/Admin/AdminFooter';
import UserFooter from './Components/Common/UserFooter';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminMain from './Components/Admin/AdminMain';
import AdminNav from './Components/Admin/AdminNav';
import RecentEnquries from './Components/Admin/RecentEnquries';
import ViewAllAdvocates from './Components/Admin/ViewAllAdvocates';
function App() {
  return (
      <BrowserRouter basename='legal_liaison' >
    <div>
      <Routes>
        {/* User routes */}

      <Route path='/' element={(<LandingNavbar/>,<LandingCarousel/>)} />
      <Route path='/UserLogin' element={[<LandingNavbar/>,<FormHead title='Home / User Login' />,<UserLogin/>]} />
      <Route path='/UserRegistration' element={[<LandingNavbar/>,<FormHead title='User Registration Form' />,<UserRegistration/>]} />
      <Route path='/user_home' element={[<UserNavbar/>,<UserHome/>]} />
      <Route path='/userfooter' element={<UserFooter/>}/>

      {/* Advocate routes */}

      <Route path='/AdvcateReg' element={[<LandingNavbar/>,<AdvcateReg/>]} />
      <Route path='/AdvocateLogin' element={[<LandingNavbar/>,<AdvocateLogin/>]} />

    {/* Bar council routes */}

      <Route path='/BarCouncilLogin' element={[<LandingNavbar/>,<BarCouncilLogin/>]} />

    {/* Admin routes */}
      <Route path='/AdminLogin' element={[<LandingNavbar/>,<FormHead title='Admin Login' />,<AdminLogin/>]} />
      {/* <Route path='/dashboard' element={[<AdminDashboard/>]}/> */}

      <Route path='/admin-dashboard' element={[<AdminNav/>,<AdminMain data="admindashboard"/>,<AdminFooter/>]}/>
      <Route path='/admin-dashboard' element={[<AdminNav/>,<AdminMain data="admindashboard"/>,<AdminFooter/>]}/>

      <Route path='/adminsidebar' element={<AdminSidebar/>}/>
      <Route path='/adminfooter' element={<AdminFooter/>}/>

      <Route path='/adminnav' element={<AdminNav/>}/>
      <Route path='/recentenquries' element={<RecentEnquries/>}/>
      <Route path='/viewalladvocates' element={<ViewAllAdvocates/>}/>





      </Routes>
</div>
</BrowserRouter>

  );
}

export default App;
