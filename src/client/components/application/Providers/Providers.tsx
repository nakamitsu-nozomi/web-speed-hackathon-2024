import { ApolloProvider, SuspenseCache } from '@apollo/client';
import type { FC, ReactNode } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { ModalProvider } from '../../../hooks/useModalProvider';
import { Fallback } from '../../../pages/Fallback';
import { apolloClient } from '../../../utils//apollo_client';

type Props = {
  children: ReactNode;
};

const suspenseCache = new SuspenseCache();

export const Providers: FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient} suspenseCache={suspenseCache}>
    <BrowserRouter>
      <ModalProvider>
        <ErrorBoundary fallbackRender={Fallback}>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
      </ModalProvider>
    </BrowserRouter>
  </ApolloProvider>
);
