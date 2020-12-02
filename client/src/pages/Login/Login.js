import Axios from "axios";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useImmer } from "use-immer";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import Page from "../../navigation/Page/Page";
import DispatchContext from "../../reducer/DispatchContext";
import LoginIcon from "./loginIcon.svg";

export default function Login() {
  const appDispatch = useContext(DispatchContext);
  const history = useHistory();

  const [state, setState] = useImmer({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  function changeHandler(name, value) {
    setState((draft) => {
      draft[name].value = value;
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await Axios.post("/login/", { email: state.email.value, password: state.password.value });
      appDispatch({
        type: "login",
        email: response.data.email,
      });
      history.push("/success");
    } catch (error) {
      setState((draft) => {
        if (error.response.data) {
          draft.email.error = error.response.data;
        }
      });
    }
  }

  return (
    <Page>
      <form className="auth-modal" onSubmit={submitHandler}>
        <h3>Log in</h3>
        <img className="auth-modal__icon" src={LoginIcon} alt="Login icon" />
        <Input
          name="email"
          placeholder="Your email"
          type="input"
          value={state.email.value}
          onChange={changeHandler}
          error={state.email.error}
        />
        <Input
          name="password"
          placeholder="Your password"
          type="password"
          value={state.password.value}
          onChange={changeHandler}
          error={state.password.error}
        />
        <Link to="/">
          <Button type="primary" text="LOG IN" onClick={submitHandler} />
        </Link>
      </form>
    </Page>
  );
}
