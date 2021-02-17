import React, { useState } from "react";
import API from "../../utils/API";
import { useHistory } from 'react-router-dom';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function SignupForm() {
    const history = useHistory();
    const [signupData, setSignupData] = useState({
            email: "",
            password: "",
            name: "", 
            error: "",
            showError: false,
            showSuccess: false
        });

    function onSubmit(event) {
        event.preventDefault();

        if (!signupData.email || !signupData.password || !signupData.name) {
            setSignupData({
                ...signupData,
                error: "You must enter an email, password, and display name.",
                showError: true
            });
            return;
        }

        API.createUser({
            email: signupData.email,
            password: signupData.password,
            name: signupData.name
        })
        .then(
            setSignupData({ 
                ...signupData,
                showSuccess: true
            })
        )
        .catch(err => {
            console.log(err);
            setSignupData({ 
                ...signupData,
                error: err.name,
                showError: true
            })
            if (err.name === "Error") {
                setSignupData({ 
                    ...signupData,
                    error: `There was an error creating your account. There may already be an account associated with ${signupData.email}.`
                })    
            }
        });
    }

    function onChange(event) {
        const target = event.target;
        switch (target.name) {
            case "email":
                setSignupData({ ...signupData, email: target.value });
                break;
            case "password":
                setSignupData({ ...signupData, password: target.value });
                break;
            case "name":
                setSignupData({ ...signupData, name: target.value });
                break;
            default:
                break;
        }
    }
  
    return (
        <Form onSubmit={onSubmit} className="p-3" style={{ width: "300px"}}>
            <Form.Control className="mb-3" type="email" name="email" placeholder="Your Email" onChange={onChange}
            />
            <Form.Control className="mb-3" type="password" name="password" placeholder="Create a Password" onChange={onChange}
            />
            <Form.Control className="mb-3" type="text" name="name" placeholder="Display Name" onChange={onChange}
            />
            <Button style={{ color: "white", backgroundColor: "#4c68a5" }} type="submit">
                Create Account
            </Button>

            <Alert className="mt-3" variant="danger" show={signupData.showError} onClose={() => setSignupData({ ...signupData, showError: false })} dismissible>
                <small>{signupData.error}</small>
            </Alert>
            <Alert className="mt-3" variant="success" show={signupData.showSuccess} onClose={() => setSignupData({ ...signupData, showSuccess: false })} dismissible>
                <small>Account created! Log in to start sharing.</small>
            </Alert>
        </Form>
    )
}

export default SignupForm;