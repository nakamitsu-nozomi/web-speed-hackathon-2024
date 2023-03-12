import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '../../components/application/Layout';
import { ProductListSlider } from '../../components/feature/ProductListSlider';
import { ProductHeroImage } from '../../components/product/ProductHeroImage';
import { ProductHeroImagePlaceholder } from '../../components/product/ProductHeroImage/ProductHeroImagePlaceholder';
import { useFeatures } from '../../hooks/useFeatures';
import { useRecommendation } from '../../hooks/useRecommendation';

import * as styles from './Top.styles';

const breakPont = 1024;

export const Top: FC = () => {
  const { recommendation } = useRecommendation();
  const { features } = useFeatures();
  const ITEM_MIN_WIDTH = 250 as const;
  const [isLargeWindow, setIsLargeWindow] = useState(window.innerWidth > breakPont);
  const containerElementRef = useRef<HTMLUListElement>(null);
  const containerWidth = containerElementRef.current?.getBoundingClientRect().width ?? 0;
  const [visibleItemCount, setVisibleItemCount] = useState(Math.max(Math.floor(containerWidth / ITEM_MIN_WIDTH), 1));

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
  if (recommendation === undefined || features === undefined) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>買えるオーガニック</title>
      </Helmet>
      <Layout>
        <div>
          {recommendation ? (
            <ProductHeroImage product={recommendation.product} title="今週のオススメ" />
          ) : (
            <ProductHeroImagePlaceholder />
          )}

          <div className={styles.featureList()}>
            {features.map((featureSection) => {
              return (
                <div key={featureSection.id} className={styles.feature()}>
                  <h2 className={styles.featureHeading()}>{featureSection.title}</h2>
                  <ProductListSlider
                    ref={containerElementRef}
                    featureSection={featureSection}
                    isLargeWindow={isLargeWindow}
                    visibleItemCount={visibleItemCount}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};
