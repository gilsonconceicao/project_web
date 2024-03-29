import { styled } from '@mui/material/styles';
import { Delete, Favorite, Info } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useAuth } from '../../Contexts/AuthContext';
import { Link } from 'react-router-dom';

const Card = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '240px',
    padding: '180px 10px',
    margin: '20px 0',
    overflow: 'hidden',
});

type CardMovieProps = {
    title: string;
    image?: string;
    altImage?: string;
    description?: string;
    onViewDetails?: () => void;
    onLike?: () => void;
    onRemoveMovieFavorite?: () => void;
    isFavorite?: boolean;
}

export default function CardMovie({ image, title, altImage, onViewDetails, onLike, isFavorite, onRemoveMovieFavorite }: CardMovieProps) {
    const { isAuthenticated } = useAuth();
    return (
        <div style={{ position: 'relative', margin: 'auto' }}>
            <Card>
                <div style={{ position: 'absolute', top: 0 }}>
                    <img onClick={!isAuthenticated ? () => console.log("") : onViewDetails} style={{ borderRadius: '50px', cursor: 'pointer', boxShadow: '5px 5px 5px #8C8C8C' }} src={`https://image.tmdb.org/t/p/w300/${image}`} alt={altImage} />
                </div>
                <div style={{ position: 'absolute', bottom: 40 }}>
                    <Typography sx={{ m: '5px 0', fontWeight: 'bold', fontSize: '20px' }}>{title}</Typography>
                    {!isAuthenticated ?
                        <>
                            <em><Link to='/register' color='blue' style={{ textDecoration: "none" }}>Registre-se</Link> para mais ações desse filme</em>
                        </>
                        :
                        <>
                            {isFavorite ?
                                <IconButton sx={{ width: 30, height: 30, m: 1 }} onClick={onRemoveMovieFavorite}>
                                    <Delete sx={{ width: 30, height: 30 }} />
                                </IconButton> :
                                <IconButton sx={{ width: 30, height: 30, m: 1 }} onClick={onLike}>
                                    <Favorite sx={{ width: 30, height: 30 }} />
                                </IconButton>}
                            <IconButton sx={{ width: 30, height: 30, m: 1, cursor: 'pointer' }} onClick={onViewDetails}>
                                <Info sx={{ width: 30, height: 30 }} />
                            </IconButton>
                        </>
                    }
                </div>
            </Card>
        </div>
    );
}