import type { ComponentProps, FC } from 'react';
import { Link as ReactLink } from 'react-router-dom';

import * as styles from './Link.styles';

type Props = Omit<ComponentProps<typeof ReactLink>, 'className'>;

export const Link: FC<Props> = ({ children, to, ...rest }) => (
  <ReactLink className={styles.container()} to={to} {...rest}>
    {children}
  </ReactLink>
);
