import React, { useState } from 'react';
import AppBar from './AppBar';
import LoggedInApp from './components/LoggedInApp';
import Login from './components/Login';
import ControlPlane from './features/controlPlane/ControlPlane';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <ControlPlane>
      <div className="flex flex-col h-screen overflow-hidden">
        {window.Main && (
          <div className="flex-none">
            <AppBar />
          </div>
        )}
        <div className="flex justify-center items-center bg-neutral-800 h-screen">
          {isLogedIn ? <LoggedInApp setValid={setIsLogedIn} /> : <Login setValid={setIsLogedIn} />}
        </div>
      </div>
    </ControlPlane>
  );
}

export default App;
