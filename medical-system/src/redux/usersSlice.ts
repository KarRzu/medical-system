import { createSlice } from "@reduxjs/toolkit";

//Typ dla danych uzytkownika
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

//Typ dla stanu

export type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

//Inicjalny stan:

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

//Slice do zarzadzania użytkownikami

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending);
  },
});

export default usersSlice.reducer;
