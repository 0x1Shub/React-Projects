import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return { quote: data.content, author: data.author };
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: { quote: "", author: "", loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default quoteSlice.reducer;
