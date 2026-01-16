import AuthorCard from "./AuthorCard";
import AuthorCreateForm from "./AuthorCreateForm";
import authors from "./authors.json";
import { Box, Grid } from "@mui/material";

const AuthorListPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Grid container spacing={2} mx="100px" my="50px">
                {authors.map((author) => (
                    <Grid item xs={12} sm={6} md={3} key={author.id}>
                        <AuthorCard author={author} />
                    </Grid>
                ))}
            </Grid>

            <AuthorCreateForm />
        </Box>
    );
};

export default AuthorListPage;
