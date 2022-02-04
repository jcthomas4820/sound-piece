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
            state.playlist.artists.push(state.artist.name)
            //  TODO - push track uri's
        },
        generatePlaylist: (state) => {
            state.isPending = true
        },
    }
})

export const { getArtist, setArtist, generatePlaylist, addToPlaylist } = musicSlice.actions
export const selectArtist = state => state.music.artist
export const selectPlaylistArtists = state => state.music.playlist.artists
export default musicSlice.reducer