import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPending: false,
    artist: {
        img: '',
        name: '',
        description: '',
    }
    //  TODO - 5 song previews
}

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        getArtist: (state) => {state.isPending = true},
        setArtist: (state, action) => {
            state.artist = action.payload
            state.isPending = false
        }
    }
})

export const { getArtist, setArtist } = musicSlice.actions
export const selectArtist = state => state.music.artist
export default musicSlice.reducer