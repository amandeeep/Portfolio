import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
// import MainApp from './MainApp';

function Final() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <SplashScreen /> : ""}
    </div>
  );
}

export default Final;



