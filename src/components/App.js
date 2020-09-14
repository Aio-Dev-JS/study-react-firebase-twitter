import React, { useState } from 'react';
import AppRouter from 'components/Router';
import fbase, { authService } from 'fBase';
//  jsconfig에서 절대 경로 사용 가능하게 만들어줌

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  //  authService.currentUser는 Null을 반환중
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
