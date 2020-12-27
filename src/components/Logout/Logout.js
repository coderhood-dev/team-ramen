import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from '..';
import { UserContext } from '../../context';

export const Logout = () => {
  const { setUser } = React.useContext(UserContext);
  const history = useHistory();
  React.useEffect(() => {
    setUser(null);
    history.push('/home');
  },
  []);
  return (<Layout />);
};
