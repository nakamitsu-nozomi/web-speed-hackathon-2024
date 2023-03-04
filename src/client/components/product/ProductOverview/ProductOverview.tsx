import dayjs from 'dayjs';
import type { FC } from 'react';
import { memo } from 'react';

import type { LimitedTimeOfferFragmentResponse, ProductFragmentResponse } from '../../../graphql/fragments';
import { ProductOfferLabel } from '../ProductOfferLabel';

import * as styles from './ProductOverview.styles';

type Props = {
  product: ProductFragmentResponse;
  activeOffer: LimitedTimeOfferFragmentResponse | undefined;
};

export const ProductOverview: FC<Props> = memo(({ activeOffer, product }) => {
  const renderActiveOffer = () => {
    if (activeOffer === undefined) {
      return;
    }

    const endTime = dayjs(activeOffer.endDate).format('YYYY/MM/D HH:mm:ss');

    return (
      <div className={styles.offerLabel()}>
        <ProductOfferLabel size="lg">
          <time>{endTime}</time> までタイムセール
        </ProductOfferLabel>
      </div>
    );
  };

  return (
    <div className={styles.container()}>
      {renderActiveOffer()}
      <p className={styles.productName()}>{product.name}</p>
      <p className={styles.productDescription()}>{product.description}</p>

      <div className={styles.priceWrapper()}>
        {activeOffer !== undefined ? (
          <span className={styles.priceWithoutOffer()}>{`¥${product.price.toLocaleString()}`}</span>
        ) : null}
        <span className={styles.price()}>
          {`¥${activeOffer?.price.toLocaleString() ?? product.price.toLocaleString()}`}
        </span>
      </div>
    </div>
  );
});

ProductOverview.displayName = 'ProductOverview';
