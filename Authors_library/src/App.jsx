import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import AuthorCreateForm from "./pages/AuthorsPages/AuthorCreateForm";
import AuthorListPage from "./pages/AuthorsPages/AuthorListPage";
import Registration from "./pages/AuthPages/RegistrationPage";
import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/AuthPages/LoginPage";
import AuthorUpdateForm from "./pages/AuthorsPages/AuthorUpdateForm";

function App() {
     const { isAuth, login, user } = useAuth();

    useEffect(() => {
        const authData = localStorage.getItem("auth");
        if (authData) {
            login();
        }
    }, []);

    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<MainPage />} />

                <Route path="register" element={<Registration />} />
                <Route path="login" element={<LoginPage />} />
            
                <Route path="authors">
                    <Route index element={<AuthorListPage />} />
                    <Route
                        path="create"
                        element={<AuthorCreateForm />}
                    />
                </Route>
                <Route path="update/:id" element={<AuthorUpdateForm />} />
            </Routes>
        </>
    );
}

export default App;
