const uploadOnCloudinary = require("../utils/cloudinaryService");
const path = require("path");
const uploadFileController = async (req, res) => {
  try {
    const localPath = path.resolve(req.file?.path);

    if (!localPath) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log("Resolved path:", localPath);
    const uploaded = await uploadOnCloudinary(localPath);

    if (!uploaded) {
      return res.status(500).json({ message: "Cloudinary upload failed" });
    }

    res.status(200).json({
      message: "Upload successful",
      url: uploaded.secure_url,
      public_id: uploaded.public_id,
      resource_type: uploaded.resource_type,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = { uploadFileController };
