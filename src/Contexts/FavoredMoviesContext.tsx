/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface Ichildren {
    children: React.ReactNode;
}

type FavoredMovieContextType = {
    favoredListMovieId: number[];
    setFavoredListMovieId: Dispatch<SetStateAction<number[]>>;
    favoredSaveMovie: (movieId: number) => void;
}

const FavoredMovieContextDefault: FavoredMovieContextType = {
    favoredListMovieId: [],
    setFavoredListMovieId: () => { },
    favoredSaveMovie: () => { }, 
}

export const FavoredMovieContext = createContext<FavoredMovieContextType>(FavoredMovieContextDefault);

export const FavoredMovieProvider = ({ children }: Ichildren) => {
    const storageList: any = JSON.parse(localStorage.getItem("favoredListMovieId") ?? "{}") || []; 
    const [favoredListMovieId, setFavoredListMovieId] = useState<number[]>(storageList ?? []);
    
    const favoredSaveMovie = (movieId: number) => {
        if (favoredListMovieId?.includes(movieId)) {
            alert("Filme já adicionado na lista de favoritos");
            return;
        }
        setFavoredListMovieId([...favoredListMovieId, movieId])
        localStorage.setItem('favoredListMovieId', JSON.stringify([...favoredListMovieId, movieId]));
    };

    console.log(favoredListMovieId)

    return (
        <FavoredMovieContext.Provider
            value={{
                favoredListMovieId: favoredListMovieId,
                setFavoredListMovieId: setFavoredListMovieId,
                favoredSaveMovie
            }}
        >
            {children}
        </FavoredMovieContext.Provider>
    )
};

export const useFavoredMovie = () => useContext(FavoredMovieContext); 