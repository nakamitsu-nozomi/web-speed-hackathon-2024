import type { FC, ReactNode } from 'react';
import { useRef } from 'react';

import { useIntersection } from '../../../hooks/useIntersection';
import { Footer } from '../../navigators/Footer/Footer';
import { Header } from '../../navigators/Header/Header';

import * as styles from './Layout.styles';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const intersectionRef = useRef<HTMLElement>(null);
  const intersection = useIntersection(intersectionRef, {
    rootMargin: '300px',
  });

  return (
    <>
      <Header />
      <main className={styles.container()}>{children}</main>
      <Footer ref={intersectionRef} isIntersecting={intersection?.isIntersecting ?? false} />
    </>
  );
};
