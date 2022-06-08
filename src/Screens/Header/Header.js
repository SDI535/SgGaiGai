import React from "react";
import './Main.css';
import ColorLogo from './Logo/LogoC.svg';
import Footer from '../Footer/Footer';
import Taxi from '../../Components/Taxi/Taxi';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="Header">

                <div className="Route">
                    <Router>

                        <div className="logo">
                            <img src={ColorLogo} alt="SG Gai Gai" width={150}/>
                        </div>

                        <div class="tab-selection">
                            
                            <div>
                            <NavLink activeClassName="active" to="/bus">Bus</NavLink>
                            </div>

                            <div>
                            <NavLink activeClassName="active" to="/car">Car</NavLink>
                            </div>

                            <div>
                            <NavLink activeClassName="active" to="/taxi">Taxi</NavLink>
                            </div>

                            <div>
                            <NavLink activeClassName="active" to="/train">Train</NavLink>
                            </div>

                        </div>

                        <div className="Divider"></div>

                        <div class="tab-container">
                            <Switch>

                            <Redirect exact from="/" to="bus" />

                            <Route path="/bus">
                                <div>Bus Content</div>
                            </Route>

                            <Route path="/car">
                                <div>Car Content</div>
                            </Route>

                            <Route path="/taxi">
                                <Taxi />
                            </Route>

                            <Route path="/train">
                                <div>Train Content</div>
                            </Route>

                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default Header;
