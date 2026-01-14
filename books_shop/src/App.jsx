import "./App.css";
import Navbar from "./components/navbar/Navbar";
import authorCreateForm from "./pages/authorsPage/authorCreateForm";
import authorListPage from "./pages/authorsPage/authorListPage";

function App() {
    return (
        <>
            <Navbar />
            <authorListPage />
            {/* <authorCreateForm /> */}
        </>
    );
}

export default App;
