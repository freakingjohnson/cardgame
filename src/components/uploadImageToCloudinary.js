import cloudinary from 'cloudinary';

export default function uploadImageToCloudinary(file) {

console.log(file)
  
  cloudinary.v2.uploader.upload(file,
    {
      resource_type: 'image',
      cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
      upload_preset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
      api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
      tags: ['cardimages'],
    },
    (error, result) => {
      result ? this.setState({ imageData: this.state.imageData.concat(result[0].public_id) }) : undefined
      // console.log(this.state.imageData)
    })
}