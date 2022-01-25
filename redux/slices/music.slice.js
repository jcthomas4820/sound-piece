import { createSlice } from '@reduxjs/toolkit';
import defaultArtistImg from '../../public/default-artist-img.png'

const initialState = {
    isPending: false,
    artist: {
        img: defaultArtistImg,
        name: '',
        description: '',
        //  TODO - 5 song previews
    },
    playlist: {
        artists: []
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
    }
})

export const { getArtist, setArtist } = musicSlice.actions
export const selectArtist = state => state.music.artist
export const selectPlaylistArtists = state => state.music.playlist.artists
export default musicSlice.reducer