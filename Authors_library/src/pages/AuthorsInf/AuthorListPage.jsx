import AuthorCard from "./AuthorCard";
import AuthorCreateForm from "./AuthorCreateForm";
import authors from "./authors.json";
import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";    
    
const AuthorListPage = () => {
    const [authors, setAuthors] = useState([]);

    const addNewAuthor = (newAuthor) => {   
        const id = authors.reduce((acc, author) => Math.max(acc, author.id), 0) + 1;
        newAuthor.id = id;
        newAuthor.isFavorite = false;
        const newList = [...authors, newAuthor];
        setAuthors(newList);
        localStorage.setItem("authors", JSON.stringify(newList));
    }

    const deleteAuthor = (id) => {
        const newList = authors.filter(a => a.id !== id);
        setAuthors(newList);
        localStorage.setItem("authors", JSON.stringify(newList));
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
                {authors.map((author) => (
                    <Grid item xs={12} sm={6} md={3} key={author.id}>
                        <AuthorCard author={author} deleteCallback={deleteAuthor} />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default AuthorListPage;
