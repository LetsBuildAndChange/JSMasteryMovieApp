export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    },
}
// more efficient
export const fetchMovies = async ({query }: { query: string }) => {
    const endpiont = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpiont,{
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })
    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch Movies', response.statusText);
    }
    const data = await response.json();
    return data.results;

}


// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';


// export const fetchMovies = async ({ query }: { query: string }) => {
//     const { BASE_URL, API_KEY } = OMDB_CONFIG;
//     const url = `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;
//
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('OMDb fetch error:', error);
//         return null;
//     }
// };

