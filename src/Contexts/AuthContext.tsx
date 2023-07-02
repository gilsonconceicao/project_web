/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useEffect, useState } from 'react';

interface Ichildren {
    children: React.ReactNode;
}

export type StepAccess = "initial" | "register" | "login" | "logged";

type AuthContextType = {
    isAuthenticated: boolean;
    setAuthenticated: (isAuth: boolean) => void;
    stepAccess: StepAccess,
    setStepAccess: (step: StepAccess) => void;
}

const AuthContextDefault: AuthContextType = {
    isAuthenticated: false,
    stepAccess: "initial",
    setAuthenticated: () => { },
    setStepAccess: () => { },
}

export const AuthContext = createContext<AuthContextType>(AuthContextDefault);

export const AuthProvider = ({ children }: Ichildren) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [stepAccess, setStepAccess] = useState<StepAccess>("initial");

    useEffect(() => {
        const userName = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        

        if (userName !== null && email!== null && password!== null) {
            setAuthenticated(true)
            setStepAccess("logged");
        } else  {
            // eslint-disable-next-line no-debugger
            debugger
            setAuthenticated(false)
            setStepAccess("initial");
        }
    }, [isAuthenticated])

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setAuthenticated,
                setStepAccess,
                stepAccess
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext); 