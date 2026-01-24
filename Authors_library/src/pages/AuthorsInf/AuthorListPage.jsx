import AuthorCard from "./AuthorCard";
import AuthorCreateForm from "./AuthorCreateForm";
import authorsJSON from "./authors.json";
import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";    
    
const AuthorListPage = () => {
    const [Authors, setAuthors] = useState([]);

    useEffect(() => {
        const storedAuthors = localStorage.getItem("Authors");
        if (storedAuthors) {
            setAuthors(JSON.parse(storedAuthors));
        } else {
            setAuthors(Authors);
        }
    }, []);

    const addNewAuthor = (newAuthor) => {   
        const id = Authors.reduce((acc, author) => Math.max(acc, author.id), 0) + 1;
        newAuthor.id = id;
        newAuthor.isFavorite = false;
        newAuthor.cover_url = newAuthor.cover;
        delete newAuthor.cover;
        const newList = [...Authors, newAuthor];
        setAuthors(newList);
        localStorage.setItem("Authors", JSON.stringify(newList));
    }

    const deleteAuthor = (id) => {
        const newList = Authors.filter(a => a.id !== id);
        setAuthors(newList);
        localStorage.setItem("Authors", JSON.stringify(newList));
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginLeft: 10,
            }}
        >
            <Grid container spacing={2} mx="auto" my="50px" marginTop={10}>
                {authorsJSON.map((a) => (
                    <Grid item xs={12} sm={6} md={3} key={a.id}>
                        <AuthorCard author={a} deleteCallback={deleteAuthor} />
                    </Grid>
                ))}
                <AuthorCreateForm createCallback={addNewAuthor} />
            </Grid>

        </Box>
    );
};

export default AuthorListPage;
