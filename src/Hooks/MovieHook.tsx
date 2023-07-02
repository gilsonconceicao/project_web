import { useQuery } from "@tanstack/react-query";
import { getMovieById, getMovies } from "../Services/movies";

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genres: {id: number, name: string}[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  tagline: string;
  video: boolean;
  vote_average: number;
};

type MovieRequesType = {
  results: MovieType[];
};

export function useGetMovies() {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["get-movie"],
    queryFn: async () => {
      const requisicao = await getMovies();
      return requisicao.data as MovieRequesType;
    },
  });

  return { data, isFetching, error, refetch };
}

export function useGetMovieById(movieId: string) {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["get-movie-by-id", movieId],
    queryFn: async () => {
      const requisicao = await getMovieById(movieId);
      return requisicao.data as MovieType;
    },
  });

  return { data, isFetching, error, refetch };
}
