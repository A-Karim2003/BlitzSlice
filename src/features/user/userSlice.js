import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../Services/apiGeolcoding";

const initialState = {
  user: null,
};

/*

function getPosition() {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
);
}


async function fetchAddress() {
    //*  get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
    };
    
    // Use a reverse geocoding API to get the user's address for the order form, allowing them to verify or correct it
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    
    return { position, address };
}

*/
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
