import { useCallback, useEffect, useState } from 'react';

import './App.css';
import { Carousel } from './Carousel';
import { loadImages } from './api';

function App() {
  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  const [time, setTime] = useState(getTime());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  const handleLoad = useCallback(async () => {
    try {
      const res = await loadImages(time);
      setImages(res.data.images);
    } catch (e) {
      setError('Something went wrong...');
    } finally {
      setLoading(false);
    }
  }, [time]);

  const handleReset = useCallback(() => {
    setLoading(true);
    setTime(getTime());
  }, []);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  if (loading) return <div>Loading...</div>;

  return error ? (
    <div>{error}</div>
  ) : (
    <Carousel onReset={handleReset} images={images} time={time} />
  );
}

export default App;
