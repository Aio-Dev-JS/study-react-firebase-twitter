import { authService } from 'fBase';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  const onLogOutCllick = () => {
    authService.signOut();
    history.push('/');
  };
  return (
    <>
      <button onClick={onLogOutCllick}>Log out</button>
    </>
  );
};
