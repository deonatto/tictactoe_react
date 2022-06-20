import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users:[],
        gameOn : false
    },
    reducers: {
        addPlayer(state, action){
            const user = {
                name: action.payload,
                wins: 0
            }
            state.users.push(user);
        },
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;