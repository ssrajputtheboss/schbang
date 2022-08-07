import { Flex, Input, Button } from '@chakra-ui/react';
import { useStore, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { loginAsync } from '../store/reducers';
import { useRouter } from 'next/router';
import { login } from '../api/login';
import axios from 'axios';
export default function Login() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    if (token && user) {
      token = JSON.parse(token);
      user = JSON.parse(user);
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
      router.push('/feed');
    }
  }, [loggedIn, router, setLoggedIn]);
  return (
    <Flex direction='column' align='center' justify='center' height='100vh'>
      <Flex maxW='400px' maxH='400px'>
        <Input ref={emailRef} placeholder='email' />
        <Input ref={passwordRef} placeholder='password' />
        <Button
          w='100%'
          onClick={() => {
            login({ email: emailRef?.current.value, password: passwordRef?.current.value })
              .then((res) => {
                if (!res.data) return;
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data.token));
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setLoggedIn(true);
              })
              .catch((err) => console.log(err));
          }}>
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
