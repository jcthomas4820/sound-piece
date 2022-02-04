export const GET_USER_PROFILE = 'https://api.spotify.com/v1/me';
export const getArtistIDEndpoint = (artistName) => `https://api.spotify.com/v1/search?q=${artistName}&type=artist`
export const getArtistTopTracksEndpoint = (artistID) => `https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=US`