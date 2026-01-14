import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

const authorCard = ({ author }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: red[500] }}
                        aria-label="recipe"
                        src="https://knu.ua/img/kobzar.jpg"
                    ></Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={author.firstName + " " + author.lastName}
            />
            <CardMedia
                sx={{ objectFit: "contain" }}
                component="img"
                height="350"
                image={
                    author.image
                        ? author.image
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                }
                alt={author.firstName + " " + author.lastName}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {author.birthday}, {author.country}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    onClick={() => setIsFavorite(!isFavorite)}
                    color={isFavorite ? "error" : ""}
                    aria-label="add to favorites"
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default authorCard;
