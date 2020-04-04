import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '52a6ae5991d0233dac6df1057040687f',
        language: 'ko-KR'
        }
});

export const moviesAPI = {
    nowPlaying: (page) => api.get(`movie/now_playing`,{
        params:{
            page
        }
    }),
    upcoming: () => api.get('movie/upcoming'),
    popular: () => api.get('movie/popular'),
    movieDetail: id => api.get(`movie/${id}`,{
        params:{
            append_to_response: 'videos'
        }
    }),
    search: term =>
    api.get('search/movie',{
        params: {
            query: encodeURIComponent(term)
        }
    })
};