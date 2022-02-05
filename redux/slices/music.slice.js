import { createSlice } from '@reduxjs/toolkit';
import defaultArtistImg from '../../public/default-artist-img.png'

const initialState = {
    isPending: false,
    artist: {
        name: '',
        img: defaultArtistImg,
        id: '',
        uri: '',
        tracks: [],
    },
    playlist: {
        artists: [],
        tracks: [],
    }
}

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        getArtist: (state, action) => {state.isPending = true},
        setArtist: (state, action) => {
            state.artist = action.payload
            state.isPending = false
        },
        addToPlaylist: (state) => {
            state.playlist.artists.push(state.artist)
        },
        generatePlaylist: (state, action) => {
            state.isPending = true
        },
    }
})

export const { getArtist, setArtist, generatePlaylist, addToPlaylist } = musicSlice.actions
export const selectArtist = state => state.music.artist
export const selectPlaylistArtists = state => state.music.playlist.artists
export const selectPlaylistTrackURIs = state => {
    const artists = state.music.playlist.artists
    const trackURIs = []
    artists.forEach(artist =>{
        const artistTracks = artist.tracks
        const topFiveTracks = artistTracks.slice(0,5)
        topFiveTracks.forEach(track => trackURIs.push(track.uri))
    })
    return trackURIs
}
export default musicSlice.reducer