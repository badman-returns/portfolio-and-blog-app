import React from "react";
import Headers from "../../components/header/header"
import LeftSideMenu from "../../components/left-side-menu/left-side-menu"

function Dashboard() {
  return (
    <div>
      <Headers />
      <div className='main-dashboard-section'/>
      <div className='d-flex'>
      <LeftSideMenu />
      </div>
      <div className='main-dashboard-content flex-fill px-3 pt-3'>
      <h1 className="text-center">Welcome to Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
