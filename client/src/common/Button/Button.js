import React, { useContext } from "react";
import DispatchContext from "../../reducer/DispatchContext";

export default function Button({ type, action, text, onClick, disabled }) {
  const appDispatch = useContext(DispatchContext);

  function buttonOnClick(e) {
    if (disabled) return;

    if (onClick) onClick(e);
    else {
      switch (action) {
        case "logout":
          appDispatch({ type: "logout" });
          break;
        default:
          break;
      }
    }
  }

  return (
    <button className={`button button--${type}${disabled ? " button--disabled" : ""}`} onClick={buttonOnClick}>
      {text}
    </button>
  );
}
