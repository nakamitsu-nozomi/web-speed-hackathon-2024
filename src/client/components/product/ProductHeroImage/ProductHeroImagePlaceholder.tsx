import type { FC } from 'react';

import { AspectRatio } from '../../foundation/AspectRatio';

import * as styles from './ProductHeroImage.styles';

export const ProductHeroImagePlaceholder: FC = () => {
  return (
    <AspectRatio ratioHeight={9} ratioWidth={16}>
      <div className={styles.placeholder()}></div>;
    </AspectRatio>
  );
};
