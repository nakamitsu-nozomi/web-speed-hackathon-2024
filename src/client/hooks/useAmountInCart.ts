import type { AuthUserFragmentResponse } from '../graphql/fragments';

export const useAmountInCart = (productId: number, authUser: AuthUserFragmentResponse | null | undefined) => {
  const order = authUser?.orders.find((order) => order.isOrdered === false);
  const shoppingCartItems = order?.items ?? [];
  const amountInCart = shoppingCartItems.find((item) => item.product.id === productId)?.amount ?? 0;

  return { amountInCart };
};
