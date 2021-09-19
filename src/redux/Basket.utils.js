export const addItem = (basketItems, basketItemToAdd) => {
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.id === basketItemToAdd.id
  );

  if (existingBasketItem) {
    return basketItems.map((basketItem) =>
      basketItem.id === basketItemToAdd.id
        ? { ...basketItem, quantity: basketItem.quantity + 1 }
        : basketItem
    );
  }

  return [...basketItems, { ...basketItemToAdd, quantity: 1 }];
};

export const removeItem = (basketItems, basketItemToRemove) => {
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.id === basketItemToRemove.id
  );

  if (existingBasketItem.quantity === 1) {
    return basketItems.filter(
      (basketItem) => basketItem.id !== basketItemToRemove.id
    );
  }
  return basketItems.map((basketItem) =>
    basketItem.id === basketItemToRemove.id
      ? { ...basketItem, quantity: basketItem.quantity - 1 }
      : { ...basketItem }
  );
};
