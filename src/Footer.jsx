import React from "react";

function Footer() {
    const currDate = new Date()
    const year = currDate.getFullYear()
    return <footer>
        <p>copyright {year}</p>
    </footer>
}

export default Footer;