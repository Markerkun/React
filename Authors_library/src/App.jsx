import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AuthorCreateForm from "./pages/AuthorsPages/AuthorCreateForm";
import AuthorListPage from "./pages/AuthorsPages/AuthorListPage";
import Registration from "./pages/AuthPages/RegistrationPage";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    // auth
    useEffect(() => {
        const authData = localStorage.getItem("auth");
        if (authData) {
            setIsAuth(true);
        }
    }, []);
    return (
        <>
            <Navbar />
            {isAuth ? <AuthorListPage /> : <Registration />}
        </>
    );
}

export default App;
