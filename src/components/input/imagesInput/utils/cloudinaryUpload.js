// Import graphql operations
import { DELETE_CLOUDINARY_FILE } from "components/graphql/mutation";

const cloudinaryUpload = ({
  cloudName,
  unsignedUploadPreset,
  apolloClient,
}) => ({
  /***** PROCESS & UPLOAD file ****/

  process: (fieldName, file, metadata, load, error, progress, abort) => {
    // Define Http variables
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    // Define Http Headers
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    // Listen to http upload progress
    xhr.upload.addEventListener("progress", (e) => {
      progress(e.lengthComputable, e.loaded, e.total);
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) {
        return;
      }

      // On successful upload
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        load(response.secure_url);
        return;
      }

      // On error upload
      error("oh no!");
    };

    // Define parameters
    formData.append("upload_preset", unsignedUploadPreset);
    formData.append("file", file);
    xhr.send(formData);

    return {
      abort: () => {
        xhr.abort();
      },
    };
  },

  /***** LOAD already uploaded files ****/

  load: (source, load, error, progress, abort, headers) => {
    const imageRequest = new Request(source);

    fetch(imageRequest)
      // Convert to blob and return
      .then((response) => {
        response.blob().then((myBlob) => {
          load(myBlob);
          return;
        });
      })

      // Return error
      .catch((responseError) => {
        error(responseError);
      });
  },

  /***** REVERT file upload ****/

  revert: async (secure_url, load, error) => {
    // Run mutation to delete file
    let {
      data: mutationData,
      errors: mutationErrors,
    } = await apolloClient.mutate({
      mutation: DELETE_CLOUDINARY_FILE,
      variables: { imgUrl: secure_url },
      errorPolicy: "all",
    });

    // Handle error status
    if (mutationErrors) {
      error("Something went wrong!");
    }

    // Handle success status
    if (mutationData) {
      load(secure_url);
      return;
    }
  },

  /***** REMOVE already uploaded file ****/

  remove: async (secure_url, load, error) => {
    // Run mutation to delete file
    let {
      data: mutationData,
      errors: mutationErrors,
    } = await apolloClient.mutate({
      mutation: DELETE_CLOUDINARY_FILE,
      variables: { imgUrl: secure_url },
      errorPolicy: "all",
    });

    // Handle error status
    if (mutationErrors) {
      error("Something went wrong!");
    }

    // Handle success status
    if (mutationData) {
      load(secure_url);
      return;
    }
  },
});

export default cloudinaryUpload;
