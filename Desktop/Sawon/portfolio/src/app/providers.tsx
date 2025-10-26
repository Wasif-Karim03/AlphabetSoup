'use client';

import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--background)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
          },
          success: {
            iconTheme: {
              primary: '#006A4E',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#DA291C',
              secondary: 'white',
            },
          },
        }}
      />
    </>
  );
}

