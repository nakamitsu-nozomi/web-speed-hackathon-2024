import classNames from 'classnames';
import type { FC } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import { ProductCard } from '../ProductCard';
import { ArrowType, ProductListSlideButton } from '../ProductListSlideButton';

import * as styles from './ProductListSlider.styles';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};
const breakPont = 1024;

export const ProductListSlider: FC<Props> = ({ featureSection }) => {
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
  const ITEM_MIN_WIDTH = 250 as const;
  const [isLargeWindow, setIsLargeWindow] = useState(window.innerWidth > breakPont);
  const containerElementRef = useRef<HTMLUListElement>(null);
  const containerWidth = containerElementRef.current?.getBoundingClientRect().width ?? 0;
  const [visibleItemCount, setVisibleItemCount] = useState(Math.max(Math.floor(containerWidth / ITEM_MIN_WIDTH), 1));
  const [_slideIndex, setSlideIndex] = useState(0);
  const slideIndex = Math.min(Math.max(0, _slideIndex), products.length - 1);

  useEffect(() => {
    setVisibleItemCount(() => {
      const containerWidth = containerElementRef.current?.getBoundingClientRect().width ?? 0;
      return Math.max(Math.floor(containerWidth / ITEM_MIN_WIDTH), 1);
    });
    window.addEventListener('resize', () => {
      setIsLargeWindow(window.innerWidth > breakPont);
      setVisibleItemCount(() => {
        const containerWidth = containerElementRef.current?.getBoundingClientRect().width ?? 0;
        return Math.max(Math.floor(containerWidth / ITEM_MIN_WIDTH), 1);
      });
    });
  }, []);

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
            <ul ref={containerElementRef} className={styles.list({ slideIndex, visibleItemCount })}>
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
};
