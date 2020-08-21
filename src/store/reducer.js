export const initialState = {
  basket: [
    {
      id: "123456",
      title:
        "Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)",
      price: {3499},
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg",
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} ) as its not present`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
