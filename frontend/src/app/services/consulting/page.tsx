'use client'
import React, { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/services';
    }
  }, []);

  return <div></div>;
};

export default Page;
