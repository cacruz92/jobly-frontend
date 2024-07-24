import React, {useState, useContext} from "react";
import useLocalStorageState from './hooks/useLocalStorageState';
import {useNavigate} from "react-router-dom"
import UserContext from "./UserContext";
import JoblyApi from "./api";
import "./Profile.css"
import {
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";;


const Profile = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    console.log(`Current User: ${currentUser.username}`)
    const navigate = useNavigate();
    const INITIAL_STATE = {
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    };

    // use state to control the form
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([])

    const[token, setToken] = useLocalStorageState('token', '')
    

    // allow the changes to the form to be entered into state 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const {username, ...dataToUpdate} = formData;
            const udpatedUser = await JoblyApi.updateUser(currentUser.username, dataToUpdate);
            setCurrentUser(udpatedUser);
            console.log("User updated correctly")
        } catch(err){
            console.error("Failed to update user:", err)
            setFormErrors(err);
        }
      }

    return(
        <div className="page-container">
        <div className="content-wrapper">
            <Card>
                <CardBody>
                    <h1>Edit Profile</h1>

                    <form 
                    className="signUpForm" 
                    onSubmit={handleSubmit}
                    >
                        
                        <label htmlFor="username">Username</label>
                        <input 
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        />
                        <br></br>                
                        
                        <label htmlFor="firstName">First name</label>
                        <input 
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        />
                        <br></br>
                        <label htmlFor="lastName">Last name</label>
                        <input 
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        />
                        <br></br>
                        <label htmlFor="email">Email</label>
                        <input 
                        id="email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        <br></br>
                        <Button color="primary" block>Save Changes</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
        </div>
    )
}

export default Profile;