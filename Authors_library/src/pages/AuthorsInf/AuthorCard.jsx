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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

const AuthorCard = ({ author }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        {author.firstName[0]}
                        {author.lastName[0]}
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVertIcon />
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
                <IconButton
                    onClick={() => setIsFavorite(!isFavorite)}
                    color={isFavorite ? "error" : "default"}
                >
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
