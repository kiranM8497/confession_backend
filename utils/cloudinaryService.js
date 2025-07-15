const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (filepath) => {
  try {
    if (!filepath) return null;

    //  upload file
    const response = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file uploaded on cloudinaru successfully!!", response.url);
    await fs.promises.unlink(filepath); // safe cleanup
    return response;
  } catch (error) {
    console.log(error);
    //remove localy save file  as upload operation  failed
    if (fs.existsSync(filepath)) await fs.promises.unlink(filepath);
    return null;
    // fs.unlinkSync(filepath);
  }
};

module.exports = uploadOnCloudinary;
