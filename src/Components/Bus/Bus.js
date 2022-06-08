//Bus.js file toggles between the different views for buses
import React, { useState, useEffect } from "react";
import LTAAPI from "./LTAAPI"
import BusList from "./BusList";
import BusMap from "./BusMap";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useHistory, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Bus = () => {

    const [selectedValue, setSelectedValue] = useState("0")
    const [busStops, setBusStops] = useState([]);

    const handleChange = (e) => {
        setSelectedValue(e.target.value)

    }

    useEffect(() => {
        async function fetchData() {
            const response = await LTAAPI.get(`/BusStops?$skip=${selectedValue}`)
            setBusStops(response.data.value);
            console.log("fetched data")
        }
        fetchData()
    }, [selectedValue])

    // const WithRouterDropdown = withRouter(({ history }) => {
    //     return (
    //         <div>
    //             <div>
    //                 <label> Select your area:</label>
    //                 <select value={selectedValue} onChange={handleChange}>
    //                     <option value="0">Central District, Downtown Core, Bukit Merah, Queenstown</option>
    //                     <option value="500">Sentosa, Telok Bangah, Alexndar, Pasir Panjang</option>
    //                     <option value="1000">Boon Lay, Pioneer, Jurong Island</option>
    //                     <option value="1500">Tengah, Hillview, Lim Chu Kang, Bukit Timah</option>
    //                     <option value="2000">Woodlands, Admiralty, Choa Chu Kang, Bukit Panjang </option>
    //                     <option value="2500">Sungei Kadut, Mandai, Thomson, Ang Mo Kio, Marymount, Braddell, Whampoa</option>
    //                     <option value="3000">Yishun, Katib, Lentor, Serangoon</option>
    //                     <option value="3500">Punggol, Sengkang, Hougang, Serangoon Gardens</option>
    //                     <option value="4000">Pasir-Ris, Tampines, Payar Lebar, Geylang</option>
    //                     <option value="4500">Changi, Bedok, Marine Parade, East Coast, Tanjong Katong</option>
    //                     <option value="5000">Changi</option>
    //                 </select>
    //             </div>
    //             <div onClick={() => {
    //                 history.push("/bus/map")
    //             }}>
    //                 Map View
    //             </div>
    //             <div onClick={() => {
    //                 history.push("/bus/list")
    //             }}>
    //                 List View
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <Router>
                <div>
                    <h2> Bus </h2>
                    <label> Select your area:</label>
                    <select value={selectedValue} onChange={handleChange}>
                        <option value="0">Central District, Downtown Core, Bukit Merah, Queenstown</option>
                        <option value="500">Sentosa, Telok Bangah, Alexndar, Pasir Panjang</option>
                        <option value="1000">Boon Lay, Pioneer, Jurong Island</option>
                        <option value="1500">Tengah, Hillview, Lim Chu Kang, Bukit Timah</option>
                        <option value="2000">Woodlands, Admiralty, Choa Chu Kang, Bukit Panjang </option>
                        <option value="2500">Sungei Kadut, Mandai, Thomson, Ang Mo Kio, Marymount, Braddell, Whampoa</option>
                        <option value="3000">Yishun, Katib, Lentor, Serangoon</option>
                        <option value="3500">Punggol, Sengkang, Hougang, Serangoon Gardens</option>
                        <option value="4000">Pasir-Ris, Tampines, Payar Lebar, Geylang</option>
                        <option value="4500">Changi, Bedok, Marine Parade, East Coast, Tanjong Katong</option>
                        <option value="5000">Changi</option>
                    </select>
                </div>
                <div>
                    <NavLink to='/bus/map'>Map View</NavLink>
                </div>
                <div>
                    <NavLink to="/bus/list"> List View </NavLink>
                </div>
                <div>
                <Switch>
                    <Route path="/bus/map">
                        <BusMap data={busStops} />
                    </Route>
                    <Route path="/bus/list">
                        <BusList data={busStops} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Bus