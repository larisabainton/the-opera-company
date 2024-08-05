import React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <StaticImage src ="../images/logo.png" alt="The Opera Company Logo"/>
            </Link>
        </header>
    )
};

export default Header;