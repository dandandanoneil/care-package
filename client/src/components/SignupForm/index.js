import React from "react";
import API from "../../utils/API";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./style.css";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            error: "",
            showError: false
        };
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (!this.state.email || !this.state.password || !this.state.name) {
            this.setState({
                error: "You must enter an email, password, and display name.",
                showError: true
            });
            return;
        }

        API.createUser({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        })
            .then(res => this.props.history.push(`/user/${res.data._id}`))
            .catch(err => {
                console.log(err);
                this.setState({
                    error: err.name,
                    showError: true
                })
                if (err.name === "Error") {
                    this.setState({
                        error: `There was an error creating your account. There may already be an account associated with ${this.state.email}.`
                    })
                }
            });
    }

    onChange = (event) => {
        const target = event.target;
        switch (target.name) {
            case "email":
                this.setState({ email: target.value });
                break;
            case "password":
                this.setState({ password: target.value });
                break;
            case "name":
                this.setState({ name: target.value });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} className="p-3 signup-form" style={{ width: "300px" }}>
                <Form.Control className="mb-3" type="email" name="email" placeholder="Your Email" onChange={this.onChange}
                />
                <Form.Control className="mb-3" type="password" name="password" placeholder="Create a Password" onChange={this.onChange}
                />
                <Form.Control className="mb-3" type="text" name="name" placeholder="Display Name" onChange={this.onChange}
                />
                <Button className="submit-btn" style={{ color: "white", backgroundColor: "#4c68a5" }} type="submit">
                    Create Account
                </Button>

                <Alert className="mt-3" variant="danger" show={this.state.showError} onClose={() => this.setState({ showError: false })} dismissible>
                    <small>{this.state.error}</small>
                </Alert>
            </Form>
        )
    }
}

export default SignupForm;