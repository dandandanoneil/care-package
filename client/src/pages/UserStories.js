import React from "react";

import PageTitle from "../components/PageTitle"
import Wrapper from "../components/Wrapper";
import Users from "../components/Users";


function UserStories() {
    return (
        <Wrapper>
            <PageTitle>User Stories</PageTitle>
                <Users />
        </Wrapper>
    );
  }

export default UserStories;