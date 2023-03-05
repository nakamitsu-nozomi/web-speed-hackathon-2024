import loadable from '@loadable/component';
import type { FC } from 'react';
import * as Router from 'react-router-dom';

import { useScrollToTop } from './hooks';

export const Routes: FC = () => {
  useScrollToTop();
  const Top = loadable(() => import('../../../pages/Top'));
  const ProductDetail = loadable(() => import('../../../pages/ProductDetail'));
  const OrderComplete = loadable(() => import('../../../pages/OrderComplete'));
  const Order = loadable(() => import('../../../pages/Order'));
  const NotFound = loadable(() => import('../../../pages/NotFound'));

  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<ProductDetail />} path="/product/:productId" />
      <Router.Route element={<Order />} path="/order" />
      <Router.Route element={<OrderComplete />} path="/order/complete" />
      <Router.Route element={<NotFound />} path="*" />
    </Router.Routes>
  );
};
