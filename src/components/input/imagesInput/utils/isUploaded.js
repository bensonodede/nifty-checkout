const isUploaded = (files) => {
  // Remove files from array which are still being processed
  const filteredFiles = files
    .filter((f) => f.status !== 3 && f.status !== 9)
    .map((f) => f.status);

  // Compare original files length with filtered to check upload status
  if (filteredFiles.length === files.length) {
    return true;
  } else {
    return false;
  }
};

export default isUploaded;
