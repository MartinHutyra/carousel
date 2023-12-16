export const loadImages = async (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          images: [
            {
              url: 'https://www.shopvox.com/img/containers/assets/gallery/signs-apparel-print-graphics.jpg/eb7557987b030d75fa8ae85e99b26d9d.jpg',
              title: `Image 1 - ${time}`
            },
            {
              url: 'https://www.shopvox.com/img/containers/assets/-welovegraphicsnerds.jpg/04ee24eab7399b8c5171bd98ae27360c.jpg',
              title: `Image 2 - ${time}`
            },
            {
              url: 'https://www.shopvox.com/img/containers/assets/gallery/signs-apparel-print-graphics.jpg/eb7557987b030d75fa8ae85e99b26d9d.jpg',
              title: `Image 3 - ${time}`
            },
            {
              url: 'https://www.shopvox.com/img/containers/assets/-welovegraphicsnerds.jpg/04ee24eab7399b8c5171bd98ae27360c.jpg',
              title: `Image 4 - ${time}`
            }
          ]
        }
      });
    }, 2000);
  });
};
