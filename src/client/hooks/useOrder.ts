import type { AuthUserFragmentResponse } from '../graphql/fragments';

export const useOrder = (authUser: AuthUserFragmentResponse | null | undefined) => {
  const order = authUser?.orders.find((order) => order.isOrdered === false);

  return { order };
};
