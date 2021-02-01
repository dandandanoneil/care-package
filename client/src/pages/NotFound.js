import React from "react";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Home from "../pages/Home";

function NotFound() {
  const location = useLocation();

  return (
    < >
        <PageTitle><code>{location.pathname}</code> not found</PageTitle>
        <Home />
    </ >
  );
}

export default NotFound;
