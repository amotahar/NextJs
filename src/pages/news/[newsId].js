import { useRouter } from 'next/router';
import React from 'react';

const NewsDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is news details of: {router.query.newsId}</h1>
    </div>
  );
};

export default NewsDetails;