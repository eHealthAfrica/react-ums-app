import cookie from 'react-cookie';

export default () => {
  cookie.remove('accessToken', { path: '/', maxAge: 86400 });
};
