import { Dispatch, FC, ReactNode, createContext, useContext, useReducer } from "react";
import { AuthActions } from "../state/actions/AuthActions";
import { AuthReducer, authInitialState } from "../state/reducers/AuthReducer";
import { User } from "../types";

export const AuthStateContext = createContext<User>(authInitialState);
export const AuthDispatchContext = createContext<Dispatch<AuthActions>>(() => undefined);

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, authInitialState);

    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};

export const useAuthState = () => {
    const context = useContext(AuthStateContext);

    if (context === undefined) {
        throw new Error("useAuthState, must be used within an AuthProvider!");
    }

    return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);

    if (context === undefined) {
        throw new Error("useAuthDispatchContext, must be used within an AuthProvider!");
    }

    return context;
}