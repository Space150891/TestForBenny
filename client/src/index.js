import Axios from "axios";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useImmerReducer } from "use-immer";
import LoadingIcon from "./common/LoadingIcon/LoadingIcon";
import "./main.scss";
import Header from "./navigation/Header/Header";
import Error404 from "./pages/Error404/Error404";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";
import DispatchContext from "./reducer/DispatchContext";
import { Reducer } from "./reducer/Reducer";
import StateContext from "./reducer/StateContext";
import * as serviceWorker from "./serviceWorker";

Axios.defaults.baseURL = process.env.REACT_APP_BACKENDURL || "http://localhost:8080/api";

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("email")),
    user: {
      email: localStorage.getItem("email"),
    },
  };

  const [state, dispatch] = useImmerReducer(Reducer, initialState);

  // localstorage handler
  useEffect(() => {
    localStorage.setItem("email", state.user.email);

    // eslint-disable-next-line
  }, [state.loggedIn]);

  return (
    <React.StrictMode>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div className="wrapper">
            <BrowserRouter>
              <Header />
              <Suspense fallback={<LoadingIcon />}>
                <Switch>
                  <Route path="/" exact>
                    <Login />
                  </Route>
                  <Route path="/success" exact>
                    {state.loggedIn ? <Success /> : <Error404 />}
                  </Route>
                  {/*fallback route*/}
                  <Route>
                    <Error404 />
                  </Route>
                </Switch>
              </Suspense>
            </BrowserRouter>
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
