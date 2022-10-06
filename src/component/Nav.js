import React from 'react';
import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';



const Nav =()=>{
  
  let navigate = useNavigate();

  return(
    <div className="navContainer">
      <div className="innerNav">
        <p className="home" onClick={() => { navigate("/")}}>
          PARIS BAGUETTE
        </p>
        <ul>
          <li>로그인</li>
          <Link className="menuList" to="/cart"><li>장바구니</li></Link>
        </ul>
        <div className="iconArea">
          <img className="logIn" src={process.env.PUBLIC_URL + "/avatar.png"}/>
          <Link to="/cart"><img className="cartIcon" src={process.env.PUBLIC_URL + "/cart.png"}/></Link>
        </div>
      </div>
    </div>
  )
}
export default Nav;