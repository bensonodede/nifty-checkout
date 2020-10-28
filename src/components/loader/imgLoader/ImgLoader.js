import React, { useEffect, useState, useRef } from "react";
import useStateWithCallback from "use-state-with-callback";
import LazyLoad from "react-lazyload";
import ExifOrientationImg from "react-exif-orientation-img";

// Import functions
import parseImgUrl from "./parseImgUrl";

// Import styles
import "./styles.scss";

const ImgLoader = ({ transform, src, alt, className, onLoad }) => {
  // Track component mounted state
  const _isMounted = useRef(false);

  // Component state
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  const [images, setImages] = useState({
    image: "",
    cached: false,
    placeholder: "",
  });
  const [loaded, setLoaded] = useStateWithCallback(false, (loaded) => {
    // Execute function after load, if any.
    if (onLoad) {
      onLoad();
    }
  });

  useEffect(() => {
    // On component mounted, set mounted state to true
    _isMounted.current = true;

    // Parse image url
    const { image, cached, placeholder } = parseImgUrl({ transform, src });

    // Set placeholder and image to state
    if (_isMounted.current) {
      setImages({ image, cached, placeholder });
    }

    // On component unmount
    return () => {
      // Set unmounted state to false
      _isMounted.current = false;
    };
  }, [src, transform]);

  // Destructure image state
  let { cached, image, placeholder } = images;

  return (
    <>
      {/* Placeholder image */}
      {!loaded && !cached && (
        <LazyLoad classNamePrefix={`img__placeholder ${className}`} once={true}>
          <ExifOrientationImg
            onLoad={() => {
              if (_isMounted.current) {
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
          once={true}
        >
          <ExifOrientationImg
            onLoad={() => {
              if (_isMounted.current) {
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
