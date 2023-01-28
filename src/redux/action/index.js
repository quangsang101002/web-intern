export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: "DELCART",
    payload: product,
  };
};
export const navMenu = (product) => {
  return {
    type: "NAVMENU",
    payload: product,
  };
};
