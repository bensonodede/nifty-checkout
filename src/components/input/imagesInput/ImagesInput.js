import React, { useState, useRef } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import { withApollo } from "@apollo/react-hoc";

// Import components
import { ErrorToast } from "components/toast";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Import functions
import { cloudinaryUpload, isUploaded } from "./utils";

// Import custom styles
import "./styles.scss";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);

const ImagesInput = ({
  // Apollo client from apollo HOC
  client: apolloClient,

  // Filepond props
  instantUpload,
  allowMultiple,
  allowReorder,
  acceptedFileTypes,
  maxFileSize,

  // Formik props
  setFieldValue,
  setFieldTouched,
  validateField,
  value,
  name,
  errors,
}) => {
  // Filpond reference
  const filePondRef = useRef(null);

  // State array to hold files
  const [files, setFiles] = useState([]);
  const [uploadError, setUploadError] = useState(false);
  const [updatedFiles, setUpdatedFiles] = useState(false);

  return (
    <>
      <div className={errors[name] ? " filepond--custom-error" : ""}>
        <FilePond
          ref={filePondRef}
          server={cloudinaryUpload({
            cloudName: "dzxuz9zc9",
            unsignedUploadPreset: "ocxdxbuw",
            apolloClient,
          })}
          oninit={() => {
            // Convert initial file URLs to local files and set to state
            value.forEach((url) => {
              setFiles((prevFiles) => [
                ...prevFiles,
                {
                  // the server file reference
                  source: url,
                  // set type to local to indicate an already uploaded file
                  options: {
                    type: "local",
                  },
                },
              ]);
            });
          }}
          // Started processing a file
          onprocessfilestart={async () => {
            // Check upload status
            let uploadStatus = await isUploaded(filePondRef.current.getFiles());

            // Set upload status
            await setFieldValue("isFilesUploaded", uploadStatus);
          }}
          onprocessfile={async (error, file) => {
            // Check upload status
            let uploadStatus = await isUploaded(filePondRef.current.getFiles());

            if (error) {
              // Set upload error status
              await setUploadError(true);

              // Set upload status
              await setFieldValue("isFilesUploaded", uploadStatus);
            }

            // If file is NOT null
            if (file.serverId) {
              // If Local files have been updated
              if (updatedFiles) {
                // Set upload status
                await setFieldValue("isFilesUploaded", uploadStatus);

                // Set field value
                await setFieldValue(name, [...value, file.serverId]);

                // Set field to touched
                await setFieldTouched(name, true);

                // Run field validation
                await validateField(name);
              }
            }
          }}
          onremovefile={async (error, file) => {
            // Check upload status
            let uploadStatus = await isUploaded(filePondRef.current.getFiles());

            // If file is NOT null
            if (file.serverId) {
              // Remove reverted url from Formik
              let urls = await value.filter((item) => item !== file.serverId);

              // If Local files have been updated
              if (updatedFiles) {
                // Set upload status
                await setFieldValue("isFilesUploaded", uploadStatus);

                // Set field value
                await setFieldValue(name, urls);

                // Set field to touched
                await setFieldTouched(name, true);

                // Run field validation
                await validateField(name);

                // Set updated files boolean
                setUpdatedFiles(false);
              }
            }
          }}
          onprocessfilerevert={async (file) => {
            // Check upload status
            let uploadStatus = await isUploaded(filePondRef.current.getFiles());

            // If file is NOT null
            if (file.serverId) {
              // If Local files have been updated
              if (updatedFiles) {
                // Remove reverted url
                let urls = await value.filter((item) => item !== file.serverId);

                // Set upload status
                await setFieldValue("isFilesUploaded", uploadStatus);

                // Set field value
                await setFieldValue(name, urls);

                // Run field validation
                await validateField(name);

                // Set updated files boolean
                setUpdatedFiles(false);
              }
            }
          }}
          onupdatefiles={(files) => {
            // Set local files to state
            setFiles(files);

            // Set updated files boolean
            setUpdatedFiles(true);
          }}
          files={files}
          instantUpload={instantUpload}
          allowMultiple={allowMultiple}
          allowReorder={allowReorder}
          acceptedFileTypes={acceptedFileTypes}
          maxFileSize={maxFileSize}
          maxParallelUploads={3}
          styleItemPanelAspectRatio={0.5}
          dropOnElement={false}
          dropOnPage={true}
          labelIdle={`
        <span>📸 </span>
        <span>Drag & Drop your files or </span>          
        <span class="filepond--label-action">Browse</span>`}
        />
      </div>

      {/* Handle upload error */}
      {uploadError && (
        <ErrorToast
          text={"Error uploading image"}
          emoji={"😭"}
          onClose={() => setUploadError(false)}
        />
      )}
    </>
  );
};

export default withApollo(ImagesInput);
