import produce from "immer";
import { User } from "../../types";
import { authenticate, logout } from "../../utils/auth";
import { AuthActions } from "../actions/AuthActions";

export const authInitialState: User = authenticate();

export const AuthReducer = produce((state: User, actions: AuthActions): User => {
    switch (actions.type) {
        case "login":
            state = authenticate(actions.token)
            return state;
        case "logout":
            state = logout();
            return state;
        default:
            return state;
    }
});