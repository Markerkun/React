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
                marginLeft: 10,
            }}
        >
            <Grid container spacing={2} mx="auto" my="50px" marginTop={10}>
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
