import React from "react";
import {Link} from "react-router-dom";
import './Unauthorized.css'
import {Button} from "reactstrap";

const Unauthorized = () => {
    return (
        <div className="unauthorized-div">
        <h1> Unauthorized ⚠️ </h1>
        <h3> Sorry, you must be logged in to view that page. </h3>
        <div className="button-container">
                <Link to="/login"> <Button color="primary" className="mr-2 custom-btn">Login</Button> </Link>
                <Link to="/signup"> <Button color="primary"className="custom-btn">Signup</Button> </Link>
                
            </div>
        </div>
        )
}

export default Unauthorized;