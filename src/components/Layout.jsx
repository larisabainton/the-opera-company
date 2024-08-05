import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="document">
            <Header />
            <div className="page">{children}</div>
            <footer>© {new Date().getFullYear()} Larisa Bainton Hernandez</footer>
        </div>
    );
}

export default Layout;