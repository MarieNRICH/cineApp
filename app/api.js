export const searchMovies = async (query) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${query}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '15b39c1dcdmsh51b44a95ed060f6p178c99jsne8de19516dab',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}