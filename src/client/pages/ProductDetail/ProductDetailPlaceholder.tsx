import type { FC } from 'react';

import { AspectRatio } from '../../components/foundation/AspectRatio';

import * as styles from './ProductDetailPlaceholder.styles';

export const ProductDetailPlaceholder: FC = () => {
  return (
    <section className={styles.details()}>
      <div className={styles.container()}>
        <AspectRatio ratioHeight={9} ratioWidth={16}>
          <div className={styles.placeholder()}></div>
        </AspectRatio>
        <div className={styles.itemListWrapper()}>
          <ul className={styles.itemList()}>
            {[...Array(8)].map((index) => {
              return (
                <li key={index} className={styles.item()}>
                  <div className={styles.itemPlaceholder()}></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.overview()}>
        <div className={styles.productOverview()}></div>
      </div>
      <div className={styles.purchase()}>
        <div className={styles.productPurchaseSection()}></div>
      </div>
    </section>
  );
};
