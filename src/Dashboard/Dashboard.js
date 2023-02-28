import Topnav from "../nav/topnav/topnav";
import Sidenav from "../nav/sidenav/Sidenav";
import UserMaster from '../Masters/Users/UserMaster';


const Dashboard = () =>{
 return (
    <>
      {/* <div className="topnav">
        <Topnav />
      </div>
      <div className="sidenav">
        <Sidenav />
      </div> */}
        <UserMaster />
        </>
  );
 }

  export default Dashboard