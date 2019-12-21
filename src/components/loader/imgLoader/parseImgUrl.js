import isCacheImg from "./isCacheImg";

const parseImgUrl = ({ transform, src }) => {
  // Get position of 'upload/' in link
  let position = src.indexOf("upload/") + 7;

  // Optimal quality image transform
  let image = [
    src.slice(0, position),
    `${transform},q_auto/`,
    src.slice(position)
  ].join("");

  // Check if image is in cache
  const cached = isCacheImg(image);

  // Poor quality image placeholder transform
  let placeholder = [
    src.slice(0, position),
    `${transform},q_1,f_auto/`,
    src.slice(position)
  ].join("");

  return { image, cached, placeholder };
};

export default parseImgUrl;
