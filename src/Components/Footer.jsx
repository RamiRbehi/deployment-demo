import React from "react"
import "../CSS/Contact.css";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
    return <div id="footer">
    <div className="container text-center">
        <p>Copyright {currentYear} Queen Park  by 
        <a href="https://github.com/RamiRbehi"> Rami Rbehi</a></p>
    </div>
</div>
};

export default Footer;