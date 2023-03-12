import classNames from 'classnames';
import { forwardRef, useMemo, useState } from 'react';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { ProductCard } from '../ProductCard';
import { ArrowType, ProductListSlideButton } from '../ProductListSlideButton';

import * as styles from './ProductListSlider.styles';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
  isLargeWindow: boolean;
  visibleItemCount: number;
};

export const ProductListSlider = forwardRef<HTMLUListElement, Props>(
  ({ featureSection, isLargeWindow, visibleItemCount }, ref) => {
    const products = featureSection.items.map((item) => item.product);

    const renderProductGridList = useMemo(
      () => (
        <ul className={styles.gridCardList()}>
          {products.map((product) => {
            return (
              <li key={product.id} className={styles.gridCardListItem()}>
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>
      ),
      [products],
    );
    const [_slideIndex, setSlideIndex] = useState(0);
    const slideIndex = Math.min(Math.max(0, _slideIndex), products.length - 1);

    return (
      <>
        {isLargeWindow ? (
          <div className={styles.container()}>
            <div className={styles.slideButton()}>
              <ProductListSlideButton
                arrowType={ArrowType.LEFT}
                disabled={slideIndex === 0}
                onClick={() => setSlideIndex(slideIndex - visibleItemCount)}
              />
            </div>
            <div className={styles.listWrapper()}>
              <ul ref={ref} className={styles.list({ slideIndex, visibleItemCount })}>
                {products.map((product, index) => {
                  const hidden = index < slideIndex || slideIndex + visibleItemCount <= index;
                  return (
                    <li
                      key={product.id}
                      className={classNames(styles.item(), {
                        [styles.item__hidden()]: hidden,
                      })}
                    >
                      <ProductCard product={product} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.slideButton()}>
              <ProductListSlideButton
                arrowType={ArrowType.RIGHT}
                disabled={slideIndex + visibleItemCount >= products.length}
                onClick={() => setSlideIndex(slideIndex + visibleItemCount)}
              />
            </div>
          </div>
        ) : (
          renderProductGridList
        )}
      </>
    );
  },
);
ProductListSlider.displayName = 'ProductListSlider';
