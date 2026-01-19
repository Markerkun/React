import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AuthorCreateForm from "./pages/AuthorsInf/AuthorCreateForm";
import AuthorListPage from "./pages/AuthorsInf/AuthorListPage";

function App() {
    return (
        <>
            <Navbar />
            <AuthorListPage />
        </>
    );
}

export default App;
