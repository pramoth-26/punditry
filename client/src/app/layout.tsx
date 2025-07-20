import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guestbook App',
  description: 'A simple guestbook application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        {/* Fixed Sidebar */}
        <nav className="fixed top-0 left-0 h-screen w-64 bg-slate-950 text-white flex flex-col p-4 shadow-lg">
          <h2 className="text-2xl font-bold mb-8"></h2>
          <h2 className="text-2xl font-bold mb-8"></h2>
          <h2 className="text-2xl font-bold mb-8"></h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/form"
                className="block py-2 px-4 rounded hover:bg-slate-700"
              >
                Form
              </Link>
            </li>
            <li>
              <Link
                href="/records"
                className="block py-2 px-4 rounded hover:bg-slate-700"
              >
                Records
              </Link>
            </li>
          </ul>
        </nav>
        {/* Main Content */}
        <main className="flex-1 ml-64 p-8 min-h-screen bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}