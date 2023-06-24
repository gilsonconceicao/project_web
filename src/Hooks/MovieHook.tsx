import { useQuery } from '@tanstack/react-query'; 
import { getMovies } from '../Services/movies';

export function useGetMovies() {
    const { data, isFetching, error, refetch } = useQuery({
        queryKey: ['get-movie'],
        queryFn: getMovies
    }); 

    return { data, isFetching, error, refetch }; 
}