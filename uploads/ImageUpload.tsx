import React, { useState } from "react";
//import cloudinary from "./cloudinnary"

const ImageUpload = () => {
  const [imageSource, setImageSource] = useState();
  const [uploadData, setUploadData] = useState();

  function handleOnChange(changeEvent: any) {
    const reader = new FileReader();

    reader.onload = function (onloadEvent: any) {
      setImageSource(onloadEvent.target.result);
      setUploadData(undefined);
    };
    reader?.readAsDataURL(changeEvent.target.files[0]);
    console.log(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event: any) {
    event.preventDefault();
    console.log(event.currentTarget);

    const form = event.currentTarget;
    const fileInput: any = Array.from(form.elements).find(
      ({ name }: any) => name === "file"
    );
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "pcewt9hd"); //process.env.CLOUDINARY_PRESET_NAME);

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/didbh2t1p/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
    console.log("data", data);

    setImageSource(data.secure_url);
    setUploadData(data);
    console.log(data.secure_url);
  }

  return (
    <div>
      <div className="w-1/3 h-aut0 m-auto flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload file
        </label>

        <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <p>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              name="file"
            />
          </p>
          <img src={imageSource} />

          {imageSource && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;
