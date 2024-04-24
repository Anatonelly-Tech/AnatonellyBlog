import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Anatonelly Blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={(poppins.className, 'h-auto w-full ')}>{children}</body>
    </html>
  );
}
