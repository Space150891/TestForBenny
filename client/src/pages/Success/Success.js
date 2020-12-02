import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react/cjs/react.development";
import Button from "../../common/Button/Button";
import Page from "../../navigation/Page/Page";
import StateContext from "../../reducer/StateContext";

export default function Success() {
  const AppState = useContext(StateContext);
  return (
    <Page title="Page not found">
      <div className="error404__wrapper">
        <h1>Hi {AppState.user.email}</h1>
        <Link to="/">
          <Button type="primary" text="LOG OUT" action="logout" />
        </Link>
      </div>
    </Page>
  );
}
