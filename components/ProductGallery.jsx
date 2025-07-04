// components/ProductGallery.jsx
'use client';
import ReactImageMagnify from 'react-image-magnify';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function ProductGallery({ images }) {
  const [sliderRef, instanceRef] = useKeenSlider({ loop: true });

  return (
    <div>
      <div className="w-full max-w-md mx-auto mb-4">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Product',
              isFluidWidth: true,
              src: images[0],
            },
            largeImage: {
              src: images[0],
              width: 1200,
              height: 1200,
            },
            enlargedImageContainerStyle: { zIndex: 100 },
          }}
        />
      </div>

      <div ref={sliderRef} className="keen-slider">
        {images.map((img, index) => (
          <div className="keen-slider__slide number-slide" key={index}>
            <img
              src={img}
              className="w-24 h-24 object-cover mx-2 rounded-md cursor-pointer"
              onClick={() => {
                instanceRef.current?.moveToIdx(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
