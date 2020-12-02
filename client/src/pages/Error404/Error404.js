import React from "react";
import { Link } from "react-router-dom";
import Page from "../../navigation/Page/Page";

export default function Error404() {
  return (
    <Page title="Page not found">
      <div className="error404__wrapper">
        <h1>Whoops, can't find this page</h1>
        <p>
          You can always visit the{" "}
          <Link to="/" className="error404__link">
            homepage
          </Link>
        </p>
      </div>
    </Page>
  );
}
