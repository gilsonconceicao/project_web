import { useGetMovies } from '../../Hooks/MovieHook'

const Movies = () => {

    const { data } = useGetMovies();

    console.log(data)

    return (
        <div>
            hello
        </div>
    )
}

export default Movies
