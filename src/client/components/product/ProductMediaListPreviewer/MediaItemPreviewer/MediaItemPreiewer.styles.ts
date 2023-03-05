import { css } from '@emotion/css';

import { Media } from '../../../../utils/media';

export const container = () => css`
  display: flex;
`;

export const video = () => css`
  height: auto;
  object-fit: cover;
  width: 100%;
  max-width: 100vw;
  @media ${Media.PC} {
    max-width: 1024px;
  }
`;
