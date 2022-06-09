import React from "react";

import "./Main.css";
import ColorLogo from "./Logo/LogoC.svg";
import Footer from "../Footer/Footer";
import Taxi from "../../Components/Taxi/Taxi";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Body from "../Body/Body";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="Route">
          <div className="logo">
            <img src={ColorLogo} alt="SG Gai Gai" width={150} />
          </div>

          <div class="tab-selection">
            <div>
              <NavLink activeClassName="active" to="/Bus/mapview">
                Bus
              </NavLink>
            </div>


            <div>
              <NavLink activeClassName="active" to="/Car/mapview">
                Car
              </NavLink>
            </div>

            <div>
              <NavLink activeClassName="active" to="/Taxi/mapview">
                Taxi
              </NavLink>
            </div>

            <div>
              <NavLink activeClassName="active" to="/Train/mapview">
                Train
              </NavLink>
            </div>
          </div>
          <div className="Divider"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
