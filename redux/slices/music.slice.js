import { createSlice } from '@reduxjs/toolkit';
import defaultArtistImg from '../../public/default-artist-img.png'

const initialState = {
    isPending: false,
    artist: {
        img: defaultArtistImg,
        name: '',
        description: '',
        //  TODO - 5 song previews
        //  TODO - may need to keep track of artist ids
    },
    playlist: {
        artists: []
        //  TODO - may need to keep track of artist ids
    }
}

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        getArtist: (state) => {state.isPending = true},
        setArtist: (state, action) => {
            state.artist = action.payload
            state.isPending = false
        },
        addToPlaylist: (state) => {
            state.playlist.artists.push(state.artist.name)
        },
        generatePlaylist: (state) => {
            state.isPending = true
        },
        //  TODO - setIsPending (useful for sagas to call directly)
    }
})

export const { getArtist, setArtist, generatePlaylist, addToPlaylist } = musicSlice.actions
export const selectArtist = state => state.music.artist
export const selectPlaylistArtists = state => state.music.playlist.artists
export default musicSlice.reducer