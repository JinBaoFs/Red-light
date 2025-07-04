// context/CartContext.jsx
'use client';
import { createContext, useContext, useReducer } from'react';

// 定义 Action 类型
const ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// 初始状态
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// context/CartContext.jsx 中的 cartReducer 函数
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      if (existingItem) {
        // 已存在的商品：更新数量
        const updatedItems = state.items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const updatedTotalQuantity = state.totalQuantity + 1;
        const updatedTotalPrice = state.totalPrice + newItem.price;
        
        return {
          ...state,
          items: updatedItems,
          totalQuantity: updatedTotalQuantity,
          totalPrice: updatedTotalPrice,
        };
      } else {
        // 新商品：添加到购物车
        // ✅ 使用不同的变量名或确保只声明一次
        const newItems = [...state.items, { ...newItem, quantity: 1 }];
        const newTotalQuantity = state.totalQuantity + 1;
        const newTotalPrice = state.totalPrice + newItem.price;
        
        return {
          ...state,
          items: newItems,
          totalQuantity: newTotalQuantity,
          totalPrice: newTotalPrice,
        };
      }

    case ACTIONS.REMOVE_ITEM:
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      const removeTotalQuantity = state.totalQuantity - itemToRemove.quantity;
      const removeTotalPrice = state.totalPrice - (itemToRemove.price * itemToRemove.quantity);
      
      return {
        ...state,
        items: updatedItems,
        totalQuantity: removeTotalQuantity,
        totalPrice: removeTotalPrice,
      };

    case ACTIONS.UPDATE_QUANTITY:
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      
      if (!itemToUpdate || quantity < 1) return state;
      
      const quantityDiff = quantity - itemToUpdate.quantity;
      const updatedItemsList = state.items.map((item) =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      );
      const updatedTotalQuantity = state.totalQuantity + quantityDiff;
      const updatedTotalPrice = state.totalPrice + (itemToUpdate.price * quantityDiff);
      
      return {
        ...state,
        items: updatedItemsList,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };

    case ACTIONS.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}

// 创建上下文
const CartContext = createContext();

// 上下文提供者组件
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 封装常用操作
  const addItem = (product) => dispatch({ type: ACTIONS.ADD_ITEM, payload: product });
  const removeItem = (itemId) => dispatch({ type: ACTIONS.REMOVE_ITEM, payload: itemId });
  const updateQuantity = (itemId, quantity) => 
  dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { itemId, quantity } });
  const clearCart = () => dispatch({ type: ACTIONS.CLEAR_CART });

  const value = {
    items: state.items,
    totalQuantity: state.totalQuantity,
    totalPrice: state.totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// 自定义 Hook
export function useCart() {
  return useContext(CartContext);
}