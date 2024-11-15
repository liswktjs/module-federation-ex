import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  appEduBasename,
  appJobBasename,
  appNetworkBasename,
  appPostingBasename,
} from "../constants/prefix";
import { Button, Icon } from "@federation/ui-kit";
import { useAuth0 } from "@auth0/auth0-react";
import { useShellNavigateListener } from "@federation/shell-router";

const Layout = () => {
  useShellNavigateListener();

  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="global-nav">
        <div className="global-nav-content">
          <Link className="global-nav-logo" to="/">
            <span>Federation</span>
          </Link>
          {isAuthenticated ? (
            <div>
              <Button
                style={{ marginLeft: 20 }}
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  })
                }
              >
                logout
              </Button>
            </div>
          ) : (
            <div>
              <Button
                style={{ marginLeft: 20 }}
                onClick={() => loginWithRedirect()}
              >
                login
              </Button>
            </div>
          )}

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
      <div className="global-container">{isAuthenticated && <Outlet />}</div>
    </div>
  );
};

export default Layout;
