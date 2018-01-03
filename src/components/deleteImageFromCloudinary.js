import cloudinary from 'cloudinary';

export default function deleteImageFromCloudinary(url) {
  const publicId = url
  
  cloudinary.v2.uploader.destroy(
    publicId,
    (error, result) => {
      if (error) {
        // TODO: LOG ERRORS REMOTELY;
        console.log(error);
      } else if (result) {
        // TODO: LOG SUCCESSFUL DELETES
        console.log(result);
      }
    },
  );
}