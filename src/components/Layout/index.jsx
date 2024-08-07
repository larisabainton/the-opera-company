import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="document">
            <Header />
            <main>{children}</main>
            <footer>© {new Date().getFullYear()} Larisa Bainton Hernandez</footer>
        </div>
    );
}

export default Layout;