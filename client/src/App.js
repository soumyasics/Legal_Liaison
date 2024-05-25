import LandingCarousel from './Components/LandingPage/LandingCarousel';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingNavbar from './Components/LandingPage/LandingNavbar';
import LandingServices from './Components/LandingPage/LandingServices';
import UserLogin from './Components/User/UserLogin';
import UserRegistration from './Components/User/UserRegistration'
import AdvcateReg from './Components/Advocates/AdvocateReg';
import AdvocateLogin from './Components/Advocates/AdvocateLogin';
import BarCouncilLogin from './Components/BarCouncil/BarCouncilLogin';
import AdminLogin from './Components/Admin/AdminLogin';
function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        {/* User routes */}

      <Route path='/' element={(<LandingNavbar/>,<LandingCarousel/>)} />
      <Route path='/UserLogin' element={[<LandingNavbar/>,<UserLogin/>]} />
      <Route path='/UserRegistration' element={[<LandingNavbar/>,<UserRegistration/>]} />

      {/* Advocate routes */}

      <Route path='/AdvcateReg' element={[<LandingNavbar/>,<AdvcateReg/>]} />
      <Route path='/AdvocateLogin' element={[<LandingNavbar/>,<AdvocateLogin/>]} />

{/* Bar council routes */}

      <Route path='/BarCouncilLogin' element={[<LandingNavbar/>,<BarCouncilLogin/>]} />

{/* Admin routes */}
      <Route path='/AdminLogin' element={[<LandingNavbar/>,<AdminLogin/>]} />


      </Routes>
</div>
</BrowserRouter>

  );
}

export default App;
