import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Joseph Ashiyan' },
    { id: '1', name: 'Hans Blood' },
    { id: '2', name: 'John Balboa' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer