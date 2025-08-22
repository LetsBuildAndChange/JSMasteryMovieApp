export const OMDB_CONFIG = {
    BASE_URL: 'https://www.omdbapi.com/',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    // Below for TMDB API
    // headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${process.env.OMDB_API_KEY}`
    // }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const { BASE_URL, API_KEY } = OMDB_CONFIG;
    const url = `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('OMDb fetch error:', error);
        return null;
    }
};
//Below for TMDB API Only
// export const FetchMovies = async({query}: {query: string} ) =>{
//     const response = await fetch(`${OMDB_CONFIG.BASE_URL}?s=${query}&apikey=${OMDB_CONFIG.API_KEY}`)
//     return response.json()
// }
