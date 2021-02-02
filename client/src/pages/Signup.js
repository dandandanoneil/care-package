import React from "react";
import PageTitle from "../components/PageTitle"
import SignupForm from "../components/SignupForm";
import Wrapper from "../components/Wrapper";

function Signup() {
    return (
        <Wrapper>
            <PageTitle>Create An Account</PageTitle>
            <SignupForm />
        </Wrapper>
    );
}

export default Signup;