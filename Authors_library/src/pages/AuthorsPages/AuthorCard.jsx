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

const AuthorCard = ({ author, deleteCallback, favoriteCallback }) => {

    const [isFavorite, setIsFavorite] = useState(author.isFavorite);

    const setFavoriteHandle = () => {
        const favoriteState = !isFavorite;
        setIsFavorite(favoriteState);
        favoriteCallback(author.id, favoriteState);
    };

    const deleteClickHandle = () => {
        deleteCallback(author.id);
    }


    return (
        <Card sx={{ mx: "auto", maxWidth: 345, height: "100%", minWidth: 300 }}>

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

            <CardContent style={{ paddingBottom: 0, paddingTop: 5}}>
                <h2 style={{ margin: 2, fontFamily: 'Lucida Sans Unicode' }}>{author.firstName} {author.lastName}<br /></h2>
                <Typography variant="body2" color="text.secondary">
                    {author.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Дата народження: {author.birthday}
                </Typography>
            </CardContent>

            <CardActions disableSpacing style={{ padding: 0, justifyContent: "space-between" }}>
                <IconButton>
                    <ShareIcon />
                </IconButton>

                <IconButton
                    onClick={setFavoriteHandle}
                    color={isFavorite ? "error" : ""}
                    aria-label="add to favorites"
                >
                    <FavoriteIcon />
                </IconButton>


                <IconButton 
                    onClick={deleteClickHandle}
                    color="error"
                    aria-label="settings">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default AuthorCard;
