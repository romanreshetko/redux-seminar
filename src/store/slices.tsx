import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
    name: string,
    age: number,
}

interface payload {
    index: number,
    name: string
}

const initialState: userState[] = [{name: "alice", age: 20}, {name: "bob", age: 22}]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<payload>) => {
            state[action.payload.index].name = action.payload.name
        }
    }
})

export const {updateName} = usersSlice.actions
export default usersSlice.reducer