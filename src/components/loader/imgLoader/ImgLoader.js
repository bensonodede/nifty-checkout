import React, { useEffect, useState, useRef } from "react";
import useStateWithCallback from "use-state-with-callback";
import LazyLoad from "react-lazy-load";
import ExifOrientationImg from "react-exif-orientation-img";

// Import functions
import parseImgUrl from "./parseImgUrl";

// Import styles
import "./styles.scss";

const ImgLoader = ({ transform, src, alt, className, onLoad }) => {
  // Track component mounted state
  const componentIsMounted = useRef(true);

  // Component state
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  const [images, setImages] = useState({
    image: "",
    cached: false,
    placeholder: ""
  });
  const [loaded, setLoaded] = useStateWithCallback(false, loaded => {
    // Execute function after load, if any.
    if (onLoad) {
      onLoad();
    }
  });

  useEffect(() => {
    // Parse image url
    const { image, cached, placeholder } = parseImgUrl({ transform, src });

    // Set placeholder and image to state
    if (componentIsMounted) {
      setImages({ image, cached, placeholder });
    }

    // Clean up to prevent memory leaks
    return function cleanup() {
      componentIsMounted.current = false;
    };
  }, [src, transform]);

  // Destructure image state
  let { cached, image, placeholder } = images;

  return (
    <>
      {/* Placeholder image */}
      {!loaded && !cached && (
        <LazyLoad className={`img__placeholder ${className}`}>
          <ExifOrientationImg
            onLoad={() => {
              if (componentIsMounted.current) {
                setPlaceholderLoaded(true);
              }
            }}
            alt={alt}
            src={placeholder}
            className={`img__placeholder ${className}`}
          />
        </LazyLoad>
      )}

      {/* Once placeholder is fully loaded, begin to load optimal image */}
      {(placeholderLoaded || cached) && (
        <LazyLoad
          className={loaded ? `img__loaded ${className}` : `img__loading`}
        >
          <ExifOrientationImg
            onLoad={() => {
              if (componentIsMounted.current) {
                setLoaded(true);
              }
            }}
            alt={alt}
            src={image}
            className={loaded ? `img__loaded ${className}` : `img__loading`}
          />
        </LazyLoad>
      )}
    </>
  );
};

export default ImgLoader;
