import React, { useEffect, useState } from "react";
import { loadImages } from "./Test";

const Carousel = ({ initialTime }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  console.log(images);
  useEffect(() => {
    const fetchAndSetImages = async () => {
      try {
        const fetchedImages = await loadImages(initialTime);
        setImages(fetchedImages.data.images);
        console.log();
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchAndSetImages();
  }, [initialTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 5000);
    // console.log(images.length);

    return () => clearInterval(intervalId);
  }, [images]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleReloadClick = () => {
    setImages([]);
    loadImages(new Date().toLocaleTimeString()).then((fetchedImages) =>
      setImages(fetchedImages)
    );
  };

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={images[currentIndex]?.url} alt="" />
      <p>{time}</p>
      {/* <p>{images[currentIndex]?.title}</p> */}
      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <div>
        <button onClick={handleReloadClick}>Reload</button>
      </div>
    </div>
  );
};

export default Carousel;
