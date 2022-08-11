import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="bg-dark text-center">
            <Link to={"/"}>
                <h1 className="text-light p-4">Heroes !</h1>
            </Link>
        </header>
    );
}

export default Header;
