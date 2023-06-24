import axios, { AxiosRequestConfig } from 'axios';
import { baseApiUpi, apiKey } from '../configApi';

export function getMovies() {
    const url = `${baseApiUpi}/trending/movie/day`;

    const config: AxiosRequestConfig = {
        params: {
            api_key: apiKey,
            language: "pt-BR"
        }
    }
    return axios.get(url, config);
}