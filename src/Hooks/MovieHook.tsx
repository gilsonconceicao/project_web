import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../Services/movies";
import { AxiosResponse } from "axios";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
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
