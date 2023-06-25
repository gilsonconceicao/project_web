import { Stack } from '@mui/material';
import CardMovie from '../../Components/CardMovie/CardMovie';
import { useGetMovies } from '../../Hooks/MovieHook'

const Movies = () => {
    const { data: moviesData } = useGetMovies();

    return (
        <div className='m-10'>
            <Stack
                direction="row-reverse"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={1}
            >
                {moviesData?.results.map((movie) =>
                    <CardMovie
                        image={movie.poster_path}
                        title={movie.title}
                    />
                )}
            </Stack>
        </div>
    )
}

export default Movies
