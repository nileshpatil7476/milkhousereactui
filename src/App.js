import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NewUser from './Masters/Users/NewUser';
import './Masters/Users/NewUser.css';
import UserList from './Masters/Users/UserMaster';
import Sidenav from './nav/sidenav/Sidenav';
import './nav/sidenav/Sidenav.css';
import Topnav from './nav/topnav/topnav';
import './nav/topnav/Topnav.css';
import RoleManager from './Masters/RoleManager/roleManager';

const App=()=>{
      
   return (
     <div>
       <div className="topnav">
         <Topnav></Topnav>
       </div>
       <div className="sidenav">
         <Sidenav></Sidenav>
       </div>
       <div className="container-fluid">
         {/* <Dashboard></Dashboard> */}
         <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/roleManager" element = { <RoleManager/>}/>
         </Routes>
       </div>
     </div>
   );
}
export default App;
