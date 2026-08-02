import { useEffect } from 'react';
import HomeScreen from './HomeScreen';


const HomePage = () => {
  useEffect(() => {
    document.title = "Movies1";
  }, []);

  return <HomeScreen />;
};

export default HomePage;
