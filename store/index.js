import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./basket/slice";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
