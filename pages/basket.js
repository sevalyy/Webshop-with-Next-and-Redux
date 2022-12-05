import React from "react";
import { selectAllItems } from "../store/basket/selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../store/basket/thunk";
import { FaTrash } from "react-icons/fa";

const basket = ({ products }) => {
  const dispatch = useDispatch();
  const basketItems = useSelector(selectAllItems);

  const removeItem = (productId) => {
    dispatch(removeFromBasket(productId));
  };
  const getItems = () => {
    if (!basketItems) return [];
    const ids = Object.keys(basketItems);
    const basketSummary = ids.map((id) => {
      return {
        count: basketItems[id],
        product: products.find((p) => p.id === parseInt(id)),
      };
    });
    return basketSummary;
  };

  const getTotalBasketPrice = () => {
    const ids = Object.keys(basketItems);

    const totalPricePerproduct = ids.map((id) => {
      const priceofProduct = products.find(
        (product) => product.id === parseInt(id)
      ).price;
      //get value of the item, in this case count
      const count = basketItems[id];
      return priceofProduct * count;
    });

    return totalPricePerproduct.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
  };

  return (
    <div className=" mt-8 pt-8 mx-auto bg-white shadow-xl border-2 border-grey-600 rounded-xl">
      <h1 className="text-center font-extrabold text-4xl my-8">
        Your Shopping Basket
      </h1>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Product name
              </th>
              <th scope="col" class="py-3 px-6">
                Count
              </th>

              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                Total Price
              </th>
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {getItems().map((basketItem) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {basketItem.product.title}
                  </th>
                  <td class="py-4 px-6">{basketItem.count}</td>
                  <td class="py-4 px-6">€ {basketItem.product.price}</td>
                  <td class="py-4 px-6">
                    € {basketItem.product.price * basketItem.count}
                  </td>

                  <td class="py-4 px-6 text-right">
                    <button onClick={() => removeItem(basketItem.product.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6"></td>
              <td class="py-4 px-6 font-extrabold text-xl">
                € {getTotalBasketPrice()}
              </td>

              <td class="py-4 px-6 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log("products", products);
  return {
    props: {
      products,
    },
  };
}

export default basket;
