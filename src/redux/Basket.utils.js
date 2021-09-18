export const addItemToBasket = (basketItems, basketItemToAdd) => {
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.id === basketItem.id
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
