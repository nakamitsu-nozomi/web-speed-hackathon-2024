import { css } from '@emotion/css';

export const container = ({ ratio }: { ratio: number }) => css`
  position: relative;
  width: 100%;
  overflow: hidden;
  ::before {
    display: block;
    padding-bottom: ${ratio}%;
    content: '';
  }
  > :first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
