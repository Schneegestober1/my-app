import { fetchToken } from "@/api/token";
import { fetchUser, fetchUserSignup } from "@/api/user";
import { Tokens } from "@/types/tokens";
import { UserType } from "@/types/uset";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: { email: string; password: string }) => {
    const user = await fetchUser({ email, password });
    localStorage.setItem("user", JSON.stringify(user))
    return user;
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async ({ email, password }: { email: string; password: string }) => {
    const userSignUp = fetchUserSignup({ email, password });
    return userSignUp;
  }
);

export const getTokens = createAsyncThunk(
  "token/getToken",
  async ({ email, password }: { email: string; password: string }) => {
    const tokens = await fetchToken({ email, password });
    localStorage.setItem("tokens", JSON.stringify(tokens))
    return tokens;
  }
);

type AuthStateType = {
  user: UserType | null;
  authState: boolean;
  tokens: Tokens | null;
  error: string;
};

const getUserFromStorage = () => {
  const user = localStorage.getItem("user")
  if(user){
    return JSON.parse(user)
  } else {
    return null
  }
}

const initialState: AuthStateType = {
  user: getUserFromStorage(),
  authState: false,
  tokens: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.authState = false;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      })
      .addCase(getTokens.fulfilled, (state, action: PayloadAction<Tokens>) => {
        state.authState = true;
        state.tokens = action.payload;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
          console.error("Error:", action.error.message);
        }
      })
      .addCase(signup.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
          console.error("Error:", action.error.message);
        }
      });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
