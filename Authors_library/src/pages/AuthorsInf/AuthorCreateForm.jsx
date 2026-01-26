import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { object, string, number } from "yup";

const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%",
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: "0px auto",
    [theme.breakpoints.up("sm")]: {
        maxWidth: "450px",
    },
    boxShadow:
        "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
    ...theme.applyStyles("dark", {
        boxShadow:
            "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
    minHeight: "100%",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(4),
    },
    "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        zIndex: -1,
        inset: 0,
        backgroundImage:
            "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
        backgroundRepeat: "no-repeat",
        ...theme.applyStyles("dark", {
            backgroundImage:
                "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
        }),
    },
}));

const initValues = {
    FirstName: "",
    LastName: "",
    Birthday: "",
    Country: "",
    Image: "",
};

const AuthorCreateForm = (createCallback) => {


    const handleSubmit = (NewAuthor) => {
        let authors = [];
        const localData = localStorage.getItem("authors");
        if (localData) {
            authors = JSON.parse(localData);
        }

        const Id = authors.reduce((acc, author) => Math.max(acc, author.id), 0) + 1;
        NewAuthor.id = Id;
        NewAuthor.image = NewAuthor.Image;
        delete NewAuthor.Image;
        NewAuthor.name = NewAuthor.FirstName;
        delete NewAuthor.FirstName;
        NewAuthor.lastName = NewAuthor.LastName;
        delete NewAuthor.LastName;
        NewAuthor.birthday = NewAuthor.Birthday;
        delete NewAuthor.Birthday;
        NewAuthor.country = NewAuthor.Country;
        delete NewAuthor.Country;
        const newList = [...authors, NewAuthor];
        localStorage.setItem("authors", JSON.stringify(newList));
    };

    const getError = (prop) => {
        return formik.touched[prop] && formik.errors[prop] ? (
            <Typography sx={{ mx: 1, color: "red" }} variant="h7">
                {formik.errors[prop]}
            </Typography>
        ) : null;
    };

    const maxYear = new Date().getFullYear();
    const validationScheme = object({
        Name: string()
            .required("Обов'язкове поле")
            .max(50, "Максимальна довжина 50 символів"),
        lastName: string()
            .required("Обов'язкове поле")
            .max(50, "Максимальна довжина 50 символів"),
        birthday: string()
            .required("Обов'язкове поле")
            .max(50, "Максимальна довжина 50 символів"),
        Country: string()
            .required("Обов'язкове поле")
            .max(50, "Максимальна довжина 50 символів"),
    });

    // formik
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: handleSubmit,
        validationSchema: validationScheme,
    });

    return (
        <Box>
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: "100%",
                            fontSize: "clamp(2rem, 10vw, 2.15rem)",
                        }}
                    >
                        Додавання нової картки автора
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="FirstName">ім'я</FormLabel>
                            <TextField
                                name="FirstName"
                                placeholder="ім'я автора"
                                autoComplete="FirstName"
                                autoFocus
                                fullWidth
                                variant="outlined"
                                value={formik.values.FirstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                        {getError("FirstName")}
                        <FormControl>
                            <FormLabel htmlFor="LastName">Прізвище</FormLabel>
                            <TextField
                                name="LastName"
                                placeholder="Прізвище автора"
                                autoComplete="LastName"
                                fullWidth
                                variant="outlined"
                                value={formik.values.LastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                        {getError("LastName")}
                        <FormControl>
                            <FormLabel htmlFor="Birthday">Дата народження</FormLabel>
                            <TextField
                                name="Birthday"
                                placeholder="Дата народження"
                                autoComplete="Birthday"
                                fullWidth
                                variant="outlined"
                                value={formik.values.Birthday}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                        {getError("Birthday")}
                        <FormControl>
                            <FormLabel htmlFor="Country">Країна</FormLabel>
                            <TextField
                                name="Country"
                                placeholder="Країна"
                                autoComplete="Country"
                                fullWidth
                                variant="outlined"
                                value={formik.values.Country}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {/* error */}
                            {getError("Country")}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="Image">Фото автора</FormLabel>
                            <TextField
                                name="Image"
                                placeholder="Фото автора"
                                autoComplete="cover"
                                fullWidth
                                variant="outlined"
                                value={formik.values.Image}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error"
                        >
                            Додати
                        </Button>
                    </Box>
                </Card>
            </SignInContainer>
        </Box>
    );
};

export default AuthorCreateForm;
