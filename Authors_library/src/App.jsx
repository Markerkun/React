import "./App.css";
import Navbar from "./components/navbar/Navbar";
import authorCreateForm from "./pages/AuthorsInf/AuthorCreateForm";
import authorListPage from "./pages/AuthorsInf/AuthorListPage";

function App() {
    return (
        <>
            <Navbar />
            <authorListPage />
            <authorCreateForm />
        </>
    );
}

export default App;
