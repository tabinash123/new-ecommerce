import React, { createContext, useState } from "react";
import all_product from './../Components/Assets/all_product';
import App from "../App";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {
    const [categoty, setcategoty] = useState("")
    const [cartItem, setcartItem] = useState(getDefaultCart)
    const [totalCartOrder, settotalCartOrder] = useState()

    const addToCart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount =0;
        for (const item in cartItem)
        {
            if (cartItem[item] > 0)
            {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
            }
            }
            return totalAmount;
    }

    const getTotalCartItem= () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0)
            {
                totalItem += cartItem[item];
            }
            
        }
        return totalItem;
    }


    const contextValue = { all_product };
    return (
        <ShopContext.Provider
            value={{ getTotalCartItem,getTotalCartAmount,contextValue, categoty,cartItem, setcategoty,addToCart,removeFromCart }}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
