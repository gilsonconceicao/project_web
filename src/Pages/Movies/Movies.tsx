import { CircularProgress, Grid, Stack, styled } from '@mui/material';
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
    const { data: moviesData, isFetching} = useGetMovies();
    return (
        <div className='m-10'>
            {isFetching && <Stack justifyContent='center'>
                <Grid margin='auto' mt={2}>
                    <CircularProgress />
                </Grid>
            </Stack>}
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