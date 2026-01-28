import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const AuthorCard = ({ author, deleteCallback }) => {

    const deleteClickHandle = () => {
        deleteCallback(author.id);
    }


    return (
        <Card sx={{ mx: "auto", maxWidth: 345, height: "100%" }}>
            <CardHeader
                action={
                    <IconButton 
                        onClick={deleteClickHandle}
                        color="error"
                        aria-label="settings"
                    >
                        <DeleteIcon />
                    </IconButton>
                }
                title={`${author.firstName} ${author.lastName}`}
                subheader={author.country}


            />

            <CardMedia
                component="img"
                height="350"
                image={
                    author.image
                        ? author.image
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
                alt={`${author.firstName} ${author.lastName}`}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Дата народження: {author.birthday}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default AuthorCard;
