import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./QuoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
