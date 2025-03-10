import { css } from '@emotion/css';

import { Media } from '../../../utils/media';

export const container = () => css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media ${Media.PC} {
    flex-direction: row;
    gap: 8px;
  }
`;

export const item = () => css`
  flex-grow: 1;
  flex-shrink: 1;
  opacity: 1;
  transition-duration: 300ms;
  transition-property: opacity;
  transition-timing-function: linear;

  &:hover {
    opacity: 0.8;
  }
`;

export const itemInner = () => css`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const thumbnail = () => css`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 50%;

  @media ${Media.PC} {
    width: 256px;
  }
`;

export const offerLabel = () => css`
  left: 0;
  margin: 4px;
  position: absolute;
  top: 0;
`;

export const details = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  padding: 8px 4px;
`;

export const itemName = () => css`
  -webkit-box-orient: vertical;
  color: #222222;
  display: -webkit-box;
  -webkit-line-clamp: line;
  overflow: hidden;
`;

export const itemPrice = () => css`
  color: #222222;
  font-size: 0.875rem;
`;

export const controller = () => css`
  align-items: center;
  display: flex;
  padding: 4px 8px;
  flex-direction: row;
  gap: 4px;
  justify-content: flex-end;
  @media ${Media.PC} {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    & button {
      width: 100%;
    }
  }
`;

// export const controller__desktop = () => css`
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   justify-content: flex-start;
// `;
//
// export const controller__mobile = () => css`
//   display: flex;
//   flex-direction: row;
//   gap: 4px;
//   justify-content: flex-end;
// `;

export const counter = () => css`
  align-items: center;
  display: flex;
  font-size: 0.75rem;
`;

export const counterInput = () => css`
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-left: 4px;
  padding: 4px 8px;
  width: 64px;

  &::placeholder {
    color: #999999;
  }
`;
