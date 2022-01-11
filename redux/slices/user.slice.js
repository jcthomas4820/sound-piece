import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authToken: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload
        }
    }
})

export const { setAuthToken } = userSlice.actions
export const selectAuthToken = state => state.user.authToken
export default userSlice.reducer
