import { useEffect, useState } from 'react';

const Carousel = ({ onReset, images, time }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <p>{time}</p>
      <img src={images[index]?.url} alt="" />
      <p>{images[index]?.title}</p>
      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div>
        <button onClick={onReset}>Reload</button>
      </div>
    </div>
  );
};

export { Carousel };
