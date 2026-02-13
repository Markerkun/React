import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = localStorage.getItem("auth");

        if (auth && auth !== "undefined") {
            const parsedUser = JSON.parse(auth);
            setUser(parsedUser);
            setIsAuth(true);
        }
    }, []);

    function login(userData) {
        if (!userData) return;

        setIsAuth(true);
        setUser(userData);
        localStorage.setItem("auth", JSON.stringify(userData));
    }

    function logout() {
        setIsAuth(false);
        setUser(null);
        localStorage.removeItem("auth");
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};
