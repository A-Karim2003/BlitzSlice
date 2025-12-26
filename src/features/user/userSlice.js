import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../Services/apiGeolcoding";
import { formatUKAddress } from "../../utils/helpers";

const initialState = {
  user: "",
  message: "",
  address: null,
  position: {},
  status: "idle",
  error: null,
};

function getPosition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

export const fetchAddress = createAsyncThunk("users/fetchAddress", async () => {
  //*  get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // Use a reverse geocoding API to get the user's address for the order form, allowing them to verify or correct it
  const addressObj = await getAddress(position);

  const address = formatUKAddress(addressObj);

  return { position, address };
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state, action) {
      state.user = action.payload;
    },

    setMessage(state, action) {
      state.message = action.payload;
    },
    clearMessage(state) {
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "success";
        state.status = null;
        state.error = null;

        state.address = action.payload.address;
        state.position = action.payload.position;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { createUser, setMessage, clearMessage } = userSlice.actions;
export default userSlice.reducer;
