import { useFavoredMovie } from '../../Contexts/FavoredMoviesContext'
import { useGetMovies } from '../../Hooks/MovieHook';
import { styled } from '@mui/material';
import CardMovie from '../../Components/CardMovie/CardMovie';
import { useNavigate } from 'react-router';

const CardConatiner = styled('div')({
    display: 'flex',
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    width: '100%',
    margin: '30px 0 '
})

const FavoredMovies = () => {
    const { favoredListMovieId, setFavoredListMovieId } = useFavoredMovie();
    const { data } = useGetMovies();
    const navigate = useNavigate();
    console.log(data)
    console.log(favoredListMovieId)

    const favoredMovies = data?.results.filter((movie) => favoredListMovieId.includes(movie.id))

    const onRemoveMovieById = (movieId: number) => {
        const list = favoredListMovieId.filter(movie => movie !== movieId);
        localStorage.setItem('favoredListMovieId', JSON.stringify(list));
        setFavoredListMovieId(list); 
    };
    // eslint-disable-next-line no-debugger
    debugger

    return (
        <div>
        Hello World
            <CardConatiner>
                {favoredMovies?.map((movie) =>
                    <CardMovie
                        onRemoveMovieFavorite={() => onRemoveMovieById(movie.id)}
                        isFavorite={true}
                        image={movie.poster_path}
                        title={movie.title}
                        onViewDetails={() => navigate(`/filmes/Detalhes/${movie.id}`)}
                    />
                )}
            </CardConatiner> 
        </div>
    )
}

export default FavoredMovies
