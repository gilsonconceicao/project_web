import { useGetMovies } from '../../Hooks/MovieHook'

const Movies = () => {

    const { data: moviesData } = useGetMovies();
    const movies = moviesData?.data

    console.log(movies); 

    return (
        <div>
            hello
        </div>
    )
}

export default Movies
