import React from "react";
import AuthenticationService from "../../../../services/authentication"
import './header.css'

const Header = (props) => {

  const Logout = (e) => {
      AuthenticationService.logout()
        .then(()=>{
          props.history.push('/admin/login');
          window.location.reload();
        }).catch(e => {
          console.log(e)
        })
  }

  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <p className="navbar-brand text-light">TS Goswami Admin</p>
      <button className=" ml-auto d-flex" onClick ={Logout}>Logout</button>
  </nav>
  ) 
};

export default Header;