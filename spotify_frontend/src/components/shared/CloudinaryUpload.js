import { openUploadWidget } from "../../utils/CloudinaryService";
import { Cloudinary_Upload_Preset } from "../../config";

const CloudinaryUpload = ({setUrl,setName}) => {
  const uploadImageWidget = () => {
    // console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dfguojdko",
        uploadPreset: Cloudinary_Upload_Preset,
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
        //   props.onImageUpload(result.info.public_id);
        // console.log(result.info.secure_url);
        setUrl(result.info.secure_url);
        setName(result.info.original_filename);
        console.log(result.info);
        }
        else
        {
            if(error)
            {
            console.log(error);
            }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="bg-spotify-green text-lg p-1 rounded-lg mt-1 font-semibold" onClick={uploadImageWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
