import { createContext } from "react";

function caculate(cartList) {
    return cartList.map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b, 0);
  }

export const cartReducer =(state, action) => {
    const cartList = [...state.cartList]
    //#1 先取得當前購物車目標品項的索引，判斷我們加入的品項是否已經重複
    const index = cartList.findIndex((item) => item.id === action.payload.id)
    switch (action.type) {
      case 'ADD_TO_CART':
        if (index === -1) {
          cartList.push(action.payload);
        } else {
          cartList[index].quantity += action.payload.quantity;
        }
        return {
          ...state,
          cartList,
          total:caculate(cartList),
        };
      case 'CHANGE_CART_QUANTITY':
        cartList[index].quantity = action.payload.quantity;
        return {
          ...state,
          cartList,
          total:caculate(cartList),
        };
      case 'REMOVE_CART_ITEM':
        cartList.splice(index,1);
        return {
          ...state,
          cartList,
          total:caculate(cartList),
        };
      default:
        return state
    }
  };

 export const cartInit ={
    cartList: [],
  };

export const CartContext = createContext({});