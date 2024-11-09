// app/not-found.tsx
'use client';

import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-black font-bold">Page Not Found</h1>
      <p className="text-lg text-black mt-4">Oops! The page you're looking for does not exist.</p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
