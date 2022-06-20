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
        addWin(state,action){
            switch(action.payload){
                case 'X':
                    state.users[0].wins++;
                    break;
                case 'O':
                    state.users[1].wins++;
                    break;
                default:
                    break;
            }

        }
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;