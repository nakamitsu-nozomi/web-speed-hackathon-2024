import dayjs from 'dayjs';
import type { FC } from 'react';

import type { ReviewFragmentResponse } from '../../../graphql/fragments';
import { Image } from '../../foundation/Image';

import * as styles from './ReviewList.styles';

type Props = {
  reviews: ReviewFragmentResponse[];
};

export const ReviewList: FC<Props> = ({ reviews }) => {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <ul className={styles.itemList()}>
      {reviews.map((review) => {
        const endTime = dayjs(review.postedAt).format('YYYY/MM/D HH:mm:ss');

        return (
          <li key={review.id} className={styles.item()} data-testid="review-list-item">
            <div className={styles.avaterImage()}>
              <Image
                height={52}
                loading="lazy"
                src={review.user.profile.avatar.filename.replace('jpg', 'webp')}
                width={52}
              />
            </div>
            <div className={styles.content()}>
              <time className={styles.time()}>{endTime}</time>
              <p className={styles.comment()}>{review.comment}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
