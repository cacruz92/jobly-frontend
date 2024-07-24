import React, {useContext} from "react";
import UserContext from "./UserContext";
import {Link} from "react-router-dom"
import {Button} from "reactstrap";
import "./Home.css"


const Home = () => {
    const {currentUser} = useContext(UserContext);

    return(
        <div className="home-div">
            <h1> Jobly </h1>
            <h3> All the jobs in one, convenient place. </h3>
        {currentUser ? (
            <h2> Welcome Back {currentUser.firstName}! </h2>
        ):(
            <div className="button-container">
                <Link to="/login"> <Button color="primary" className="mr-2 custom-btn">Login</Button> </Link>
                <Link to="/signup"> <Button color="primary"className="custom-btn">Signup</Button> </Link>
                
            </div>
        )}
        </div>
    )
}

export default Home;

