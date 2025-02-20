import React, { useState, useEffect } from "react";
import { auth, provider, signInWithPopup } from "./services/firebase";
import { getLocation } from "./services/geolocation";
import Map from "./components/Map";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({
    latitude: 51.505,
    longitude: -0.09,
  });

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <>
            <h1>Welcome, {user.displayName}</h1>
            <Map latitude={location.latitude} longitude={location.longitude} />
          </>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </header>
    </div>
  );
};

export default App;
