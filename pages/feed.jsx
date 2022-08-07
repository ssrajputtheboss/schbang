import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Feed from '../components/Feed';

export default function FeedPage() {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      token = JSON.parse(token);
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
      router?.push('/feed');
    } else router.push('/login');
  }, []);
  return (
    <>
      <Head>Feed</Head>
      <Feed />
    </>
  );
}
