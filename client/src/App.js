import LandingCarousel from './Components/LandingPage/LandingCarousel';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingNavbar from './Components/LandingPage/LandingNavbar';
import LandingServices from './Components/LandingPage/LandingServices';
import UserLogin from './Components/User/UserLogin';
import UserRegistration from './Components/User/UserRegistration';
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
import AdvocateRegister from './Components/Advocates/AdvocateRegister';
import ApproveRejectAdvocate from './Components/Admin/ApproveRejectAdvocate';
import AdvocateHome from './Components/Advocates/AdvocateHome';
import ViewProfile_AR from './Components/Admin/ViewProfile_AR';
import AdvocateNavbar from './Components/Advocates/AdvocateNavbar';
import AdvocateEditProfile from './Components/Advocates/AdvocateEditProfile';
import AboutUs from './Components/LandingPage/AboutUs';
import JuniorAdvocateRegistration from './Components/JuniorAdvocates/JuniorAdvocateRegistration';
import AdminApproveRejectJuniorAdvocate from './Components/Admin/ViewJuniorAdvocateRequest';
import AdminViewAllJuniorAdvocate from './Components/Admin/AdminViewAllJuniorAdvocate';
import JuniorAdvocateLogin from './Components/JuniorAdvocates/JuniorAdvocateLogin';
import ContactUs from './Components/LandingPage/ContactUs';
import ViewProfile_AllJuniorAdvocates from './Components/Admin/ViewProfile_AllJuniorAdvocates';
import ViewProfile_JuniorAdvocate from './Components/Admin/ViewProfile_JuniorAdvocate';
import ViewProfile_JuniorAdvocateRequest from './Components/Admin/ViewProfile_JuniorAdvocateRequest';
import JuniorAdvocateHome from './Components/JuniorAdvocates/JuniorAdvocateHome';

function App() {
  return (
    <BrowserRouter basename="legal_liaison">
      <div>
        <Routes>
          {/* User routes */}
          <Route path="/" element={(<LandingNavbar />, <LandingCarousel />)} />
          <Route path="/UserLogin" element={[<LandingNavbar />, <FormHead title="Home / User Login" />, <UserLogin />]} />
          <Route path="/UserRegistration" element={[<LandingNavbar />, <FormHead title="User Registration Form" />, <UserRegistration />]} />
          <Route path="/user_home" element={[<UserNavbar />, <UserHome />,<UserFooter/>]} />
          <Route path="/userfooter" element={<UserFooter />} />

          {/* Advocate routes */}
          <Route path="/AdvcateReg" element={[<LandingNavbar />, <AdvcateReg />]} />
          <Route path="/AdvocateLogin" element={[<LandingNavbar />, <AdvocateLogin />, <UserFooter />]} />
          <Route path="/AdvcateRegister" element={[<LandingNavbar />, <AdvocateRegister />, <UserFooter />]} />
          <Route path="/advocate_home" element={[<AdvocateNavbar />, <AdvocateHome />]} />
          <Route path="/advocate_edit_profile/:id" element={[<AdvocateNavbar />,<FormHead title="Advocate Profile View" />, <AdvocateEditProfile />,<UserFooter />]} />

          {/* Bar council routes */}
          <Route path="/BarCouncilLogin" element={[<LandingNavbar />, <BarCouncilLogin />]} />

          {/* Admin routes */}
          <Route path="/AdminLogin" element={[<LandingNavbar />, <FormHead title="Admin Login" />, <AdminLogin />, <AdminFooter />]} />
          <Route path="/admin-dashboard" element={[<AdminNav />, <AdminMain data="admindashboard" />, <AdminFooter />]} />
          <Route path="/admin-viewalladvocates" element={[<AdminNav />, <AdminMain data="adminviewalladvocates" />, <AdminFooter />]} />
          <Route path="/adminviewadvocaterequest" element={[<AdminNav />, <AdminMain data="approvereject" />, <AdminFooter />]} />
          <Route path="/adminviewrequest/:id" element={[<AdminNav />, <AdminMain data="adminviewrequest" />, <AdminFooter />]} />
          <Route path="/admin_view_single_advocate/:id" element={[<AdminNav />, <AdminMain data="adminviewsingleadvocate" />, <AdminFooter />]} />
          <Route path="/adminsidebar" element={<AdminSidebar />} />
          <Route path="/adminfooter" element={<AdminFooter />} />
          <Route path="/adminnav" element={<AdminNav />} />
          <Route path="/recentenquries" element={<RecentEnquries />} />
          <Route path="/adminviewrequest/:id" element={<ViewProfile_AR />} />

          <Route path="/adminviewjunioradvocaterequest" element={[<AdminNav />,<AdminMain data='approverejectjunioradvocate'/>, <AdminFooter />]} />
          <Route path="/adminviewalljunioradvocates" element={[<AdminNav />,<AdminMain data="adminviewalljunioradvocates"/>, <AdminFooter />]} />
          <Route path="/JuniorAdvocateViewProfile/:id" element={[<AdminNav />,<AdminMain data='adminviewprofile-alladvocates'/>,<AdminFooter />]} />
          <Route path="/JuniorAdvocate-profile-request/:id" element={[<LandingNavbar />,<AdminMain data='adminviewprofile-requests'/>,<UserFooter />]} />

          {/* Junior Advocate routes */}
          <Route path="/JuniorAdvocateRegister" element={[<LandingNavbar />,<JuniorAdvocateRegistration/>,<UserFooter />]} />
          <Route path="/JuniorAdvocateLogin" element={[<LandingNavbar />,<JuniorAdvocateLogin/>,<UserFooter />]} />          
          <Route path="/JuniorAdvocate-homepage" element={[<LandingNavbar />,<JuniorAdvocateHome />,<UserFooter />]} />          

          
          {/* Landing Page routes */}
          <Route path="/aboutus" element={[<LandingNavbar />,<AboutUs />,<UserFooter />]} />
          <Route path="/services" element={[<LandingNavbar />,<LandingServices />,<UserFooter />]} />
          <Route path="/contactus" element={[<LandingNavbar />,<ContactUs />,<UserFooter />]} />




        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
