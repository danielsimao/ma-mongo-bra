import React from "react";
import uuid from "uuid";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "./actions/types";

export const Store = React.createContext();

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, { id: uuid(), name: action.payload }]
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
