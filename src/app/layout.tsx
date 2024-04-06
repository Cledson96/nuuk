import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import '@/css/reset.css';
import '@/css/style.css';
import '@/css/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'NUUK Resources',
  description: 'Your service in good hands',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
