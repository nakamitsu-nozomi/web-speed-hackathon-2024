import classNames from 'classnames';
import type { FC } from 'react';
import { memo } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { Anchor } from '../../foundation/Anchor';
import { AspectRatio } from '../../foundation/AspectRatio';

import * as styles from './ProductHeroImage.styles';

type Props = {
  product: ProductFragmentResponse;
  title: string;
  lazy?: boolean;
};

export const ProductHeroImage: FC<Props> = memo(({ lazy, product, title }) => {
  const thumbnailFile = product.media.find((productMedia) => productMedia.isThumbnail)?.file;

  return (
    <Anchor href={`/product/${product.id}`}>
      <div className={styles.container()}>
        <AspectRatio ratioHeight={9} ratioWidth={16}>
          <img
            alt={product.name}
            className={styles.image()}
            loading={lazy ? 'lazy' : 'eager'}
            src={thumbnailFile?.filename}
          />
        </AspectRatio>

        <div className={styles.overlay()}>
          <p className={classNames(styles.title())}>{title}</p>
          <p className={classNames(styles.description())}>{product.name}</p>
        </div>
      </div>
    </Anchor>
  );
});

ProductHeroImage.displayName = 'ProductHeroImage';
