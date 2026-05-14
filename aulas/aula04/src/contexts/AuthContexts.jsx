import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);

    const login = (dados) => {
        //login
        setLogado(true);
    };
     const logout = () => {
        //logout
        setLogado(false);
    };

    return (
        <AuthContext.Provider value={{ logado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
