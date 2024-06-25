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
import AdminMain from './Components/Admin/AdminMain';
import AdminNav from './Components/Admin/AdminNav';
import RecentEnquries from './Components/Admin/RecentEnquries';
import AdvocateRegister from './Components/Advocates/AdvocateRegister';
import AdvocateHome from './Components/Advocates/AdvocateHome';
import ViewProfile_AR from './Components/Admin/ViewProfile_AR';
import AdvocateNavbar from './Components/Advocates/AdvocateNavbar';
import AdvocateEditProfile from './Components/Advocates/AdvocateEditProfile';
import AboutUs from './Components/LandingPage/AboutUs';
import JuniorAdvocateRegistration from './Components/JuniorAdvocates/JuniorAdvocateRegistration';
import JuniorAdvocateLogin from './Components/JuniorAdvocates/JuniorAdvocateLogin';
import ContactUs from './Components/LandingPage/ContactUs';
import JuniorAdvocateHome from './Components/JuniorAdvocates/JuniorAdvocateHome';
import JuniorAdvocateEditProfile from './Components/JuniorAdvocates/JuniorAdvocateEditProfile';
import JuniorAdvocateNavbar from './Components/JuniorAdvocates/JuniorAdvocateNavbar';
import UserProfile from './Components/User/UserProfile';
import UserAddCases from './Components/User/UserAddCases';
import UserViewRecentCases from './Components/User/UserViewRecentCases';

import AdvocateViewCaseReq from './Components/Advocates/AdvocateViewCaseReq';
import AdvocateViewAllCaseReq from './Components/Advocates/AdvocateViewAllCaseReq';
import AdvocateViewSingleRecentCase from './Components/Advocates/AdvocateViewSingleRecentCase';

import UserNav_Main from './Components/User/UserNav_Main';
import User_ViewAllAdvocates from './Components/User/User_ViewAllAdvocates';
import User_ViewAdvocateDetail from './Components/User/User_ViewAdvocateDetail';
import User_RequestAdvocate from './Components/User/User_RequestAdvocate';
import User_BookAppoinment from './Components/User/User_BookAppoinment';
import Advocate_ViewCaseRequest from './Components/Advocates/Advocate_ViewCaseRequest';
import UserChattoAdvocate from './Components/User/UserChattoAdvocate';
import Advocate_PaymentRequest from './Components/Advocates/Advocate_PaymentRequest';
import Advocate_AddEvidence from './Components/Advocates/Advocate_AddEvidence';
import Advocate_UpdateCaseStatus from './Components/Advocates/Advocate_UpdateCaseStatus';
import JuAdvocate_ViewAllAdvocates from './Components/JuniorAdvocates/JuAdvocate_ViewAllAdvocates';
import JuAdvocate_RequestMentorshop from './Components/JuniorAdvocates/JuAdvocate_RequestMentorshop';
import Advocate_ViewJuAdvocateRequest from './Components/Advocates/Advocate_ViewJuAdvocateRequest';
import AdvocateViewAllRecentCases from './Components/Advocates/AdvocateViewAllRecentCases';
import AdvocateChat from './Components/Advocates/AdvocateChat';
import InternRegistration from './Components/Interns/InternRegistration';
import InternLogin from './Components/Interns/InternLogin';
import InternsHome from './Components/Interns/InternsHome';
import AdvocateViewJnrAdvReqProfile from './Components/Advocates/AdvocateViewJnrAdvReqProfile';
import JuniorAdvocateViewMentor from './Components/JuniorAdvocates/JuniorAdvocateViewMentor';
import JuniorAdvChatToAdv from './Components/JuniorAdvocates/JuniorAdvChatToAdv';


function App() {
  return (
    <BrowserRouter basename="legal_liaison">
      <div>
        <Routes>
          {/* Client routes */}
          <Route path="/" element={(<LandingNavbar />, <LandingCarousel />)} />
          <Route path="/UserLogin" element={[<LandingNavbar />, <FormHead title="Home / User Login" />, <UserLogin />]} />
          <Route path="/UserRegistration" element={[<LandingNavbar />, <FormHead title="User Registration Form" />, <UserRegistration />]} />
          <Route path="/user_home" element={[<UserNavbar />, <UserHome />,<UserFooter/>]} />
          <Route path="/user_profile" element={[<UserNavbar />, <FormHead title="Client Profile View" />,<UserProfile/>,<UserFooter/>]} />
          <Route path="/user_add_case" element={[<UserNavbar />, <FormHead title="Add Case Details" />,<UserAddCases/>,<UserFooter/>]} />
          <Route path="/user_view_recent_cases" element={[<UserNavbar />, <FormHead title="Recent Cases" />,<UserViewRecentCases/>,<UserFooter/>]} />
          <Route path="/userfooter" element={<UserFooter />} />
          <Route path="/client-viewalladvocate" element={[<UserNavbar />,<User_ViewAllAdvocates />,<UserFooter/>]} />
          <Route path="/user_view_advocate_detail/:id" element={[<UserNavbar />,<User_ViewAdvocateDetail />,<UserFooter/>]} />
          <Route path="/user-requestanadvocate/:id" element={[<UserNavbar />,<User_RequestAdvocate />,<UserFooter/>]} />
          <Route path="/user_bookappoinment/:id/:cid" element={[<UserNavbar />,<User_BookAppoinment />,<UserFooter/>]} />
          <Route path="/user_chat_to_advocate/:aid" element={[<UserNavbar />,<FormHead title="Chat" />,<UserChattoAdvocate />,<UserFooter/>]} />


          {/* Advocate routes */}
          <Route path="/AdvcateReg" element={[<LandingNavbar />, <AdvcateReg />]} />
          <Route path="/AdvocateLogin" element={[<LandingNavbar />, <AdvocateLogin />, <UserFooter />]} />
          <Route path="/AdvcateRegister" element={[<LandingNavbar />, <AdvocateRegister />, <UserFooter />]} />
          <Route path="/advocate_home" element={[<AdvocateNavbar />, <AdvocateHome />]} />
          <Route path="/advocate_edit_profile/:id" element={[<AdvocateNavbar />,<FormHead title="Advocate Profile View" />, <AdvocateEditProfile />,<UserFooter />]} />
          {/* <Route path="/advocate_view_all_case_req" element={[<AdvocateNavbar />,<FormHead title="Case Requests" />, <AdvocateViewAllCaseReq />,<UserFooter />]} /> */}
          <Route path="/advocate_viewcasereq" element={[<AdvocateNavbar />, <Advocate_ViewCaseRequest />, <UserFooter />]} />
          <Route path="/advocate_view_single_case_req/:id" element={[<AdvocateNavbar />,<FormHead title="Case Requests" />, <AdvocateViewCaseReq />,<UserFooter />]} />
          <Route path="/advocate_view_all_recent_case" element={[<AdvocateNavbar />,<FormHead title="Recent Cases" />, <AdvocateViewAllRecentCases />,<UserFooter />]} />
          <Route path="/advocate_view_single_recent_case/:id" element={[<AdvocateNavbar />,<FormHead title="Case Tittle" />, <AdvocateViewSingleRecentCase />,<UserFooter />]} />
          <Route path="/advocate_chat" element={[<AdvocateNavbar />,<FormHead title="Chat" />, <AdvocateChat type='noChat' />,<UserFooter />]} />
          <Route path="/advocate_single_chat/:uid" element={[<AdvocateNavbar />,<FormHead title="Chat" />, <AdvocateChat type='user' />,<UserFooter />]} />

          <Route path="/advocate_viewcasereq" element={[<AdvocateNavbar />, <Advocate_ViewCaseRequest />, <UserFooter />]} />
          <Route path="/advocate_paymentreq" element={[<AdvocateNavbar />, <Advocate_PaymentRequest />, <UserFooter />]} />
          <Route path="/advocate_addevidence" element={[<AdvocateNavbar />, <Advocate_AddEvidence />, <UserFooter />]} />
          <Route path="/advocate_update_casestatus" element={[<AdvocateNavbar />, <Advocate_UpdateCaseStatus />, <UserFooter />]} />
          <Route path="/advocate_viewjuadvocatereq" element={[<AdvocateNavbar />, <Advocate_ViewJuAdvocateRequest />, <UserFooter />]} />
          <Route path="/advocate_view_jnr_adv_profile_req/:id/:aid" element={[<AdvocateNavbar />, <AdvocateViewJnrAdvReqProfile />, <UserFooter />]} />


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
          <Route path="/admin_view_intern_adv_req" element={[<AdminNav />, <AdminMain data="approverejectIntern" />, <AdminFooter />]} />
          <Route path="/admin_view_intern_detailed_req/:id" element={[<AdminNav />, <AdminMain data="interndetailreq" />, <AdminFooter />]} />
          <Route path="/admin_view_intern_details/:id" element={[<AdminNav />, <AdminMain data="interndetails" />, <AdminFooter />]} />
          <Route path="/admin_view_approved_interns" element={[<AdminNav />, <AdminMain data="approvedInterns" />, <AdminFooter />]} />


          <Route path="/adminviewjunioradvocaterequest" element={[<AdminNav />,<AdminMain data='approverejectjunioradvocate'/>, <AdminFooter />]} />
          <Route path="/adminviewalljunioradvocates" element={[<AdminNav />,<AdminMain data="adminviewalljunioradvocates"/>, <AdminFooter />]} />
          <Route path="/JuniorAdvocateViewProfile/:id" element={[<AdminNav />,<AdminMain data='adminviewprofile-alladvocates'/>,<AdminFooter />]} />
          <Route path="/JuniorAdvocate-profile-request/:id" element={[<LandingNavbar />,<AdminMain data='adminviewprofile-requests'/>,<UserFooter />]} />

          {/* Junior Advocate routes */}
          <Route path="/JuniorAdvocateRegister" element={[<LandingNavbar />,<JuniorAdvocateRegistration/>,<UserFooter />]} />
          <Route path="/JuniorAdvocateLogin" element={[<LandingNavbar />,<JuniorAdvocateLogin/>,<UserFooter />]} />          
          <Route path="/JuniorAdvocate-homepage" element={[<JuniorAdvocateNavbar/>,<JuniorAdvocateHome />,<UserFooter />]} /> 
          <Route path="/JuniorAdvocate-editprofile" element={[<JuniorAdvocateNavbar/>,<JuniorAdvocateEditProfile />,<UserFooter />]} /> 
          <Route path="/JuniorAdvocate-viewalladvocate" element={[<JuniorAdvocateNavbar/>,<JuAdvocate_ViewAllAdvocates />,<UserFooter />]} /> 
          <Route path="/JuniorAdvocate-requestmentorship/:id" element={[<JuniorAdvocateNavbar/>,<JuAdvocate_RequestMentorshop />,<UserFooter />]} /> 
          <Route path="/junior_adv_view_mentor" element={[<JuniorAdvocateNavbar/>,<JuniorAdvocateViewMentor />,<UserFooter />]} /> 
          <Route path="/junior_adv_chat_to_adv/:aid" element={[<JuniorAdvocateNavbar/>,<JuniorAdvChatToAdv />,<UserFooter />]} /> 


          {/* Intern Routes */}

          <Route path="/intern_registration" element={[<LandingNavbar />,<InternRegistration/>,<UserFooter />]} />
          <Route path="/intern_login" element={[<LandingNavbar />,<InternLogin/>,<UserFooter />]} />
          <Route path="/intern_home" element={[<LandingNavbar />,<InternsHome/>,<UserFooter />]} />



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
