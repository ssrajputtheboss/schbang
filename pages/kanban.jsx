import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import YourKanban from '../components/YourKanban';

export default function KanbanPage() {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      token = JSON.parse(token);
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    } else router.push('/login');
  }, []);
  return (
    <>
      <Head>Feed</Head>
      <YourKanban />
    </>
  );
}
