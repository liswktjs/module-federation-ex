import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  appEduBasename,
  appJobBasename,
  appNetworkBasename,
  appPostingBasename,
} from "../constants/prefix";
import { Icon } from "@federation/ui-kit";

const Layout = () => {
  return (
    <div>
      <header className="global-nav">
        <div className="global-nav-content">
          <Link className="global-nav-logo" to="/">
            <span>Federation</span>
          </Link>
          <nav className="global-nav-nav">
            <ul className="global-nav-items">
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appPostingBasename}`}
                >
                  <Icon.Home />
                  <span className="global-nav-link-text">홈</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appNetworkBasename}`}
                >
                  <Icon.UserFriends />
                  <span className="global-nav-link-text">인맥</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appEduBasename}`}>
                  <Icon.LaptopCode />
                  <span className="global-nav-link-text">교육</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appJobBasename}`}>
                  <Icon.Briefcase />
                  <span className="global-nav-link-text">채용공고</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="global-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
