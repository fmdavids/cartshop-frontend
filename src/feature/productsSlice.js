import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  status: null,
};

// export const productsFetch = createAsyncThunk(
//   "products/productsFetch",
//   async () => {
//     try {
//       const response = await axios.get(
//         "https://chaoo-online-shop.herokuapp.com/products"
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // reset: state => initialState
  },
});

// export const {reset} = productsSlice.actions
export default productsSlice.reducer;
