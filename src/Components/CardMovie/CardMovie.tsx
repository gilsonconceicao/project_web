import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import { Favorite, Edit } from '@mui/icons-material'; 

type CardMovieProps = {
    title: string; 
    image?: string; 
    altImage?: string; 
    description?: string; 
    onViewOption?: () => void;
    onLike?: () => void;
}

export default function CardMovie({ image, title, description, altImage, onViewOption, onLike }: CardMovieProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 400, width: '100%', backgroundImage: 'initial', backgroundSize: 'cover' }}
                image={`https://image.tmdb.org/t/p/w300/${image}`}
                title={altImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onLike}>
                    <Favorite />
                </Button>
                <Button size="small" onClick={onViewOption}>
                    <Edit />
                </Button>
            </CardActions>
        </Card>
    );
}