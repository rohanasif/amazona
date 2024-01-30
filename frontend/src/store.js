import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";
import { userLoginReducer } from "./reducer/userReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
  cart: cartReducer,
  userLogin:userLoginReducer
});

const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null


const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
    cart: {
       cartItems: cartItemsFromStorage
  },
  userLogin:{userInfo:userInfoFromStorage}
      
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
