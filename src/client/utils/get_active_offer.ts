import dayjs from 'dayjs';

import type { LimitedTimeOfferFragmentResponse } from '../graphql/fragments';

export function getActiveOffer(
  offers: LimitedTimeOfferFragmentResponse[],
): LimitedTimeOfferFragmentResponse | undefined {
  return offers.find((offer) => {
    const now = dayjs();
    const startDate = dayjs(offer.startDate);
    const endDate = dayjs(offer.endDate);
    return startDate.isAfter(now) && endDate.isBefore(now);
  });
}
