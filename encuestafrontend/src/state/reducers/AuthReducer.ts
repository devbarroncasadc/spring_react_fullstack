import { User } from "../../types";
import { authenticate } from "../../utils/auth";
import { AuthActions } from "../actions/AuthActions";

export const authInitialState: User = authenticate();

export const AuthReducer = (state: User, actions: AuthActions): User => {
    switch (actions.type) {
        case "login":
            return state;
        case "logout":
            return state;
        default:
            return state;
    }
}