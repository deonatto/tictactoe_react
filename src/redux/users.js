import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],
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
        },
        endGame(state){
            state.users = [];
        }
    }
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;