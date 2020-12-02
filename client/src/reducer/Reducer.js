let scrollingElement = document.scrollingElement || document.documentElement;

export function Reducer(draft, action) {
  switch (action.type) {
    case "login":
      draft.loggedIn = true;
      draft.user.email = action.email;
      return;
    case "logout":
      draft.loggedIn = false;
      draft.user.email = "";
      return;
    default:
      return;
  }
}
