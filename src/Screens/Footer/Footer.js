import React from "react";
import '../../Screens/Header/Main.css';
import BWLogo from './Logo/LogoBW.svg';

function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="Intro1">GaiGai means “going out” in Cantonese, and is a commonly used Singaporean term. It's a term derived from Cantonese, 出街, "街街".
It also has the meaning of “walk walk” or “jalan jalan” </div>
                <div className="logoBW">
                    <img src={BWLogo} alt="SG Gai Gai" width={120}/>
                </div>
                <div className="Intro2">SG Gai Gai is a real-time transport-checking app that helps you decide which is the most suitable transport mode to take at the moment when you travel around in Singapore.</div>
            </div>
        </>
    )
}


export default Footer;