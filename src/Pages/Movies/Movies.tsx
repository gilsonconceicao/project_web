import { styled } from '@mui/material';
import CardMovie from '../../Components/CardMovie/CardMovie';
import { useGetMovies } from '../../Hooks/MovieHook'
import { useNavigate } from 'react-router';

const CardConatiner = styled('div')({
    display: 'flex',
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    width: '100%', 
    margin: '30px 0 '
})

const Movies = () => {
    const navigate = useNavigate();
    const { data: moviesData } = useGetMovies();
    return (
        <div className='m-10'>
            <CardConatiner>
                {moviesData?.results.map((movie) =>
                    <CardMovie
                        image={movie.poster_path}
                        title={movie.title}
                        onViewDetails={() => navigate(`/filmes/Detalhes/${movie.id}`)}
                    />
                )}
            </CardConatiner>
        </div>
    )
}

export default Movies