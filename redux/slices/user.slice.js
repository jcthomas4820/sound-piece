import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authToken: '',
    isPending: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getAuthToken: (state) => {state.isPending = true},
        extractAuthTokenFromUrl: (state) => {state.isPending = true},
        setAuthToken: (state, action) => {
            state.authToken = action.payload
            state.isPending = false
        },
        getUserID: (state) => {
            state.isPending = true
        }
    }
})

export const { setAuthToken, getAuthToken, extractAuthTokenFromUrl, getUserID } = userSlice.actions
export const selectAuthToken = state => state.user.authToken
export default userSlice.reducer
