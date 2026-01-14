import authorCard from "./authorCard";
import authorCreateForm from "./authorCreateForm";
import authors from "./authors.json";
import { Box, Grid } from "@mui/material";

// sx == style

const authorListPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Grid container spacing={2} mx="100px" my="50px">
                {authors.map((b) => (
                    <Grid size={3} key={b.id}>
                        <authorCard author={b}/>
                    </Grid>
                ))}
            </Grid>
            <authorCreateForm />
        </Box>
    );
};

export default authorListPage;
