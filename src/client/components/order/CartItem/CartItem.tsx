import classNames from 'classnames';
import type { ChangeEventHandler, FC } from 'react';
import { useCallback } from 'react';

import type { ShoppingCartItemFragmentResponse } from '../../../graphql/fragments';
import { useActiveOffer } from '../../../hooks/useActiveOffer';
import { normalizeCartItemCount } from '../../../utils/normalize_cart_item';
import { AspectRatio } from '../../foundation/AspectRatio';
import { Image } from '../../foundation/Image';
import { Link } from '../../foundation/Link';
import { OutlineButton } from '../../foundation/OutlineButton';
import { ProductOfferLabel } from '../../product/ProductOfferLabel';

import * as styles from './CartItem.styles';

type Props = {
  item: ShoppingCartItemFragmentResponse;
  onUpdate: (productId: number, count: number) => void;
  onRemove: (productId: number) => void;
};

export const CartItem: FC<Props> = ({ item, onRemove, onUpdate }) => {
  const thumbnailFile = item.product.media.find((productMedia) => productMedia.isThumbnail)?.file;
  const { activeOffer } = useActiveOffer(item.product);
  const price = activeOffer?.price ?? item.product.price;

  const updateCount: ChangeEventHandler<HTMLInputElement> = useCallback(
    (ev) => {
      const count = normalizeCartItemCount(ev.target.valueAsNumber || 1);
      onUpdate(item.product.id, count);
    },
    [item.product.id, onUpdate],
  );

  return (
    <div className={classNames(styles.container())}>
      <div className={styles.item()}>
        <Link to={`/product/${item.product.id}`}>
          <div className={styles.itemInner()}>
            {thumbnailFile ? (
              <div className={classNames(styles.thumbnail())}>
                <AspectRatio ratioHeight={9} ratioWidth={16}>
                  <Image fill src={thumbnailFile.filename.replace('jpg', 'webp')} />
                </AspectRatio>
                {activeOffer !== undefined && (
                  <div className={styles.offerLabel()}>
                    <ProductOfferLabel size="base">タイムセール中</ProductOfferLabel>
                  </div>
                )}
              </div>
            ) : null}
            <div className={styles.details()}>
              <p className={styles.itemName()}>{item.product.name}</p>
              <p className={styles.itemPrice()}>{`¥${price.toLocaleString()}`}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className={classNames(styles.controller())}>
        <label className={styles.counter()}>
          個数:
          <input
            className={styles.counterInput()}
            defaultValue={item.amount}
            max={999}
            min={1}
            onChange={updateCount}
            type="number"
          />
        </label>
        <OutlineButton onClick={() => onRemove(item.product.id)} size="base">
          削除
        </OutlineButton>
      </div>
    </div>
  );
};
