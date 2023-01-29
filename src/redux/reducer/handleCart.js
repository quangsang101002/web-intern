const cart = [];

const HandleCart = (state = cart, action) => {
  const product = action.payload;
  console.log("state", state);
  switch (action.type) {
    case "ADDCART":
      //check if product alreadly Exit
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        //increse the quality
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELCART":
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    case "NAVMENU":
      return {
        product,
      };
    default:
      return state;
  }
};
export default HandleCart;
