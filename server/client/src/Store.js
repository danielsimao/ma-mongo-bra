import React from "react";
import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEMS,
  ITEMS_LOADING
} from "./actions/types";

export const Store = React.createContext();

const initialState = {
  items: [],
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload, loading: false };
    case ADD_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ITEMS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
