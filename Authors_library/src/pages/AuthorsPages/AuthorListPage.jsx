import AuthorCard from "./AuthorCard";
import AuthorCreateForm from "./AuthorCreateForm";
import authorsJSON from "./authors.json";
import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
    
const AuthorListPage = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem("authors");
        if (localData) {
            setAuthors(JSON.parse(localData));
        } else {
            setAuthors(authorsJSON);
            localStorage.setItem("authors", JSON.stringify(authorsJSON));
        }
    }, []);

    const addAuthor = (newAuthor) => {
        const newList = [...authors, newAuthor];
        setAuthors(newList);
        localStorage.setItem("authors", JSON.stringify(newList));
    }

    const deleteAuthor = (id) => {
        const newList = authors.filter(a => a.id !== id);
        setAuthors(newList);
        localStorage.setItem("authors", JSON.stringify(newList));
    }

    const setFavorite = (id, favorite) => {
        const newList = [...authors];
        const index = newList.findIndex((b) => b.id === id);
        if (index !== -1) {
            newList[index].isFavorite = favorite;
            setAuthors(newList);
            localStorage.setItem("authors", JSON.stringify(newList));
        }
    };


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
                {authors.map((a) => (
                    <Grid item xs={12} sm={6} md={3} key={a.id}>
                        <AuthorCard author={a} deleteCallback={deleteAuthor} favoriteCallback={setFavorite} />
                    </Grid>
                ))}
            </Grid>
            <AuthorCreateForm createCallback={addAuthor} />

        </Box>
    );
};

export default AuthorListPage;
