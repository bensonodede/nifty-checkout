const isCacheImg = imgUrl => {
  try {
    // Get cached images
    const cache =
      JSON.parse(window.sessionStorage.getItem("seen_images")) || {};

    // Check if image is in cache
    if (cache[imgUrl]) {
      return true;
    }

    // If not in cache, set image to cache
    else {
      cache[imgUrl] = true;
      window.sessionStorage.setItem("seen_images", JSON.stringify(cache));
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default isCacheImg;
