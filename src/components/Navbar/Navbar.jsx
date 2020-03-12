import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
         <div className={style.item}>
           <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
         </div>
         <div className={style.item}>
           <NavLink to="/dialogs" activeClassName={style.activeLink}>Massages</NavLink>
         </div>
          <div className={style.item}>
                <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
          </div>
         <div className={style.item}>
           <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
         </div>
         <div className={style.item}>
           <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
         </div>
         <div className={style.item}>
           <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
         </div>
         <div className={style.item}>
             <NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink>
         </div>


         <div>

         </div>
      </nav>
    );
};
export default Nav;