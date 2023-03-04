import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

import * as styles from './Icon.styles';

type Props = {
  width: number;
  height: number;
  color: string;
  children: ReactNode;
};

export const Icon: FC<Props> = ({ children, color, height, width }) => {
  return <span className={classNames(styles.container({ color, height, width }))}>{children}</span>;
};
