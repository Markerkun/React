import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

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
    minHeight: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
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

const AuthorUpdateForm = () => {
    const [formValues, setFormValues] = useState({
        FirstName: "",
        LastName: "",
        Birthday: "",
        Country: "",
        Image: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const localData = localStorage.getItem("authors");
        if (localData) {
            const authors = JSON.parse(localData);
            const author = authors.find((a) => a.id == id);
            if (!author) {
                navigate("/authors", { replace: true });
                return;
            }
            setFormValues({
                FirstName: author.FirstName || "",
                LastName: author.LastName || "",
                Birthday: author.Birthday || "",
                Country: author.Country || "",
                Image: author.Image || "",
            });
        } else {
            navigate("/authors", { replace: true });
        }
    }, [id, navigate]);

    const onChangeHandle = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const validateErrors = {};
        let result = true;

        if (!formValues.FirstName) {
            validateErrors.FirstName = "Обов'язкове поле";
            result = false;
        } else if (formValues.FirstName.length > 100) {
            validateErrors.FirstName = "Максимальна довжина 100 символів";
            result = false;
        }

        if (!formValues.LastName) {
            validateErrors.LastName = "Обов'язкове поле";
            result = false;
        } else if (formValues.LastName.length > 100) {
            validateErrors.LastName = "Максимальна довжина 100 символів";
            result = false;
        }

        if (!formValues.Birthday) {
            validateErrors.Birthday = "Обов'язкове поле";
            result = false;
        }

        if (!formValues.Country) {
            validateErrors.Country = "Обов'язкове поле";
            result = false;
        } else if (formValues.Country.length > 100) {
            validateErrors.Country = "Максимальна довжина 100 символів";
            result = false;
        }

        if (formValues.Image.length > 100) {
            validateErrors.Image = "Максимальна довжина 100 символів";
            result = false;
        }

        return { result, errors: validateErrors };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validateResult = validate();
        if (!validateResult.result) {
            setErrors(validateResult.errors);
            return;
        }

        const localData = localStorage.getItem("authors");
        if (!localData) return;

        const authors = JSON.parse(localData);
        const index = authors.findIndex((a) => a.id == id);
        if (index === -1) return;

        authors[index] = { ...formValues, id: authors[index].id };
        localStorage.setItem("authors", JSON.stringify(authors));
        navigate("/authors");
    };

    const getError = (prop) => {
        return errors[prop] ? (
            <Typography sx={{ mx: 1, color: "red" }} variant="body2">
                {errors[prop]}
            </Typography>
        ) : null;
    };

    return (
        <Box>
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
                    >
                        Оновлення картки автора
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="FirstName">Ім'я</FormLabel>
                            <TextField
                                name="FirstName"
                                placeholder="Ім'я автора"
                                autoComplete="FirstName"
                                autoFocus
                                fullWidth
                                variant="outlined"
                                value={formValues.FirstName || ""}
                                onChange={onChangeHandle}
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
                                value={formValues.LastName || ""}
                                onChange={onChangeHandle}
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
                                value={formValues.Birthday || ""}
                                onChange={onChangeHandle}
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
                                value={formValues.Country || ""}
                                onChange={onChangeHandle}
                            />
                        </FormControl>
                        {getError("Country")}

                        <FormControl>
                            <FormLabel htmlFor="Image">Фото автора</FormLabel>
                            <TextField
                                name="Image"
                                placeholder="Фото автора"
                                autoComplete="cover"
                                fullWidth
                                variant="outlined"
                                value={formValues.Image || ""}
                                onChange={onChangeHandle}
                            />
                        </FormControl>
                        {getError("Image")}

                        <Button type="submit" fullWidth variant="contained" color="error">
                            Оновити
                        </Button>
                    </Box>
                </Card>
            </SignInContainer>
        </Box>
    );
};

export default AuthorUpdateForm;
