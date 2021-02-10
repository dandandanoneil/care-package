import React from "react";
import PageTitle from "../components/PageTitle"
import SignupForm from "../components/SignupForm";
import Wrapper from "../components/Wrapper";

function Signup() {
    return (
        <Wrapper>
            <PageTitle>Create An Account</PageTitle>
            <div className="row justify-content-md-center">
                <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10">
                    <SignupForm />
                </div>
            </div>
        </Wrapper>
    );
}

export default Signup;