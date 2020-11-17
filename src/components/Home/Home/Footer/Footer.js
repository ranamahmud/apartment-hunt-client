import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
const Footer = () => {
    const address = [
        {name: "H#340 (4th Floor), Road #24," },
        {name: "New DOHS, Mohakhali, Dhaka, Bangladesh" },
        {name: "Phone: 018XXXXXXXX" },
        {name: "E-mail: info@company.com" }
    
    ]
    const Company = [
        {name: "About" , link: "/home"},
        {name: "Site Map" , link: "//google.com/map"},
        {name: "Support Center" , link: "/home"},
        {name: "Terms Conditions" , link: "/home"},
        {name: "Submit Listing" , link: "/home"}
    ]
    const QuickLinks = [
        {name: "Quick Links" , link: "/home"},
        {name: "Rentals" , link: "/home"},
        {name: "Sales" , link: "/home"},
        {name: "Contact" , link: "/home"},
        {name: "Terms Conditions" , link: "/home"},
        {name: "Our blog" , link: "/home"}
    ]
    const AboutUs = [
        {name: "We are the top real estate " },
        {name: "agency in Sydney, with agents "},
        {name: "available to answer any "},
        {name: "question 24/7."}
    ]
    return (
        <footer id='contact' className="footer-area clear-both mt-4">
            <div className="container pt-5">
                <div className="row py-5">
                    <img src="" alt=""/>
                    <FooterCol key={1}  menuTitle={"Location"} menuItems={address}/>
                    <FooterCol key={2} menuTitle="Company" menuItems={Company}/>
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={QuickLinks}/>
                    <FooterCol key={4} menuTitle="About us" menuItems={AboutUs}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><img src={'https://i.ibb.co/ZXfcXnP/facebook-1.png'} alt=""/></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><img src={'https://i.ibb.co/4PRxZDc/instagram-2.png'} alt=""/></a></li>
                            <li className="list-inline-item"><a href="//linkedin.com"><img src={'https://i.ibb.co/Bqpp85s/linkedin-1.png'} alt=""/></a></li>
                            <li className="list-inline-item"><a href="//youtube.com"><img src={'https://i.ibb.co/rwH1YWX/youtube-1.png'} alt=""/></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p >Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;