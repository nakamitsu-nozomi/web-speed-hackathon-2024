import type { FC, ReactNode } from 'react';

import * as styles from './AspectRatio.styles';

type Props = {
  ratioWidth: number;
  ratioHeight: number;
  children: ReactNode;
};

export const AspectRatio: FC<Props> = ({ children, ratioHeight, ratioWidth }) => {
  const ratio = (ratioHeight / ratioWidth) * 100;

  return (
    <div className={styles.container({ ratio })}>
      <div>{children}</div>
    </div>
  );
};
