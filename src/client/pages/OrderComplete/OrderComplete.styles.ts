import { css } from '@emotion/css';

import { Media } from '../../utils/media';

export const container = () => css`
  display: grid;
  gap: 8px;
  padding: 24px 16px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const notice = () => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const noticeHeading = () => css`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const noticeDescriptionWrapper = () => css`
  display: grid;
  height: 100%;
  place-items: center;
`;

export const noticeDescription = () => css`
  font-family: 'Noto Serif JP', sans-serif;
  text-align: center;
  font-size: 1rem;
  @media ${Media.PC} {
    font-size: 1.125rem;
  }
`;

export const recommended = () => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const recommendedHeading = () => css`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const backToTopButtonWrapper = () => css`
  margin-top: 40px;
  text-align: center;
`;
