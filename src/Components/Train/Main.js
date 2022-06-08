import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Main.css";
import App from "./App";
import CCLstation from "./stations/CCLstation";
import DTLstation from "./stations/DTLstation";
import EWLstation from "./stations/EWLstation";
import NELstation from "./stations/NELstation";
import NSLstation from "./stations/NSLstation";
import BPLstation from "./stations/BPLstation";
import SLRTstation from "./stations/SLRTstation";
import PLRTstation from "./stations/PLRTstation";

function Main() {
    return (
        <Router>
            <>
                <h3>MRT Platform Crowd Density Real Time</h3>
                <div class="tab-selection">
                <div>
                        <Link to="/MRT/map">MRT MAP</Link>
                    </div>
                    <div>
                        <Link to="/MRT/ccl">CCL (for Circle Line)</Link>
                    </div>
                    <div>
                        <Link to="/MRT/dtl">DTL (for Downtown Line)</Link>
                    </div>
                    <div>
                        <Link to="/MRT/ewl">EWL (for East West Line)</Link>
                    </div>
                    <div>
                        <Link to="/MRT/nel">NEL (for North East Line)</Link>
                    </div>
                    <div>
                        <Link to="/MRT/nsl">NSL (for North South Line)</Link>
                    </div>
                    <div>
                        <Link to="/MRT/bpl">BPL (for Bukit Panjang LRT)</Link>
                    </div>
                    <div>
                        <Link to="/MRT/slrt">SLRT (for Sengkang LRT)</Link>
                    </div>
                    <div>
                        <Link to="/MRT/plrt">PLRT (for Punggol LRT)</Link>
                    </div>
                </div>
                <div class="tab-container">
                    <Switch>
                    <Route path="/MRT/map">
                            <App />
                        </Route>
                        <Route path="/MRT/ccl">
                            <CCLstation />
                        </Route>
                        <Route path="/MRT/dtl">
                            <DTLstation />
                        </Route>
                        <Route path="/MRT/ewl">
                            <EWLstation />
                        </Route>
                        <Route path="/MRT/nel">
                            <NELstation />
                        </Route>
                        <Route path="/MRT/nsl">
                            <NSLstation />
                        </Route>
                        <Route path="/MRT/bpl">
                            <BPLstation />
                        </Route>
                        <Route path="/MRT/slrt">
                            <SLRTstation />
                        </Route>
                        <Route path="/MRT/plrt">
                            <PLRTstation />
                        </Route>
                    </Switch>
                </div>
            </>
        </Router>
    );
}

export default Main;
