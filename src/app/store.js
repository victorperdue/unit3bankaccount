// import { configureStore } from "@reduxjs/toolkit";

// // TODO: Configure the store to use the reducer from the transactions slice.
// export const store = configureStore();

import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";

// Configure the store to use the reducer from the transactions slice.
export const store = configureStore({
  reducer: {
    transactions: transactionsReducer
  }
});
