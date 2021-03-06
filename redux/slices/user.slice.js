import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authToken: '',
    userID: '', //  TODO - change to simply id
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
        },
        setUserID: (state, action) => {
            state.userID = action.payload
            state.isPending = false
        }
    }
})

export const { setAuthToken, getAuthToken, extractAuthTokenFromUrl, getUserID, setUserID } = userSlice.actions
export const selectAuthToken = state => state.user.authToken
export const selectUserID = state => state.user.userID
export default userSlice.reducer
