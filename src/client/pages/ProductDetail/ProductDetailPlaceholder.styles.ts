import { css } from '@emotion/css';

export const details = () => css`
  display: grid;
  gap: 20px;
`;

export const overview = () => css`
  padding: 0 16px;
`;

export const purchase = () => css`
  margin-left: auto;
  padding: 0 16px;
`;

export const reviews = () => css`
  display: grid;
  gap: 20px;
  padding: 0 16px;
`;

export const productPurchaseSection = () => css`
  background: white;
  height: 40px;
`;

export const productOverview = () => css`
  background: white;
  height: 314px;
`;

export const container = () => css`
  display: grid;
  gap: 8px;
  overflow-x: hidden;
`;

export const itemListWrapper = () => css`
  display: grid;
  overflow-x: scroll;
  place-items: center;
`;

export const itemList = () => css`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 0 24px 8px;
  width: fit-content;
`;

export const item = () => css`
  height: 40px;
  width: 40px;
`;

export const placeholder = () => css`
  height: 100%;
  width: 100%;
`;

export const itemPlaceholder = () => css`
  height: 40px;
  width: 40px;
`;
