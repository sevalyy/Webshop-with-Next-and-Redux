import React from "react";
import { useSelector } from "react-redux";
import { selectAllItems } from "../store/basket/selector";

const BasketCount = () => {
  const basketItems = useSelector(selectAllItems);
  const getTotal = () => {
    const sum = Object.values(basketItems).reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  };
  return <span>{getTotal()}</span>;
};

export default BasketCount;
