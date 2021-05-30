const userProfileimageUpdateController = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.status(200).json({ message: "Successfully uploaded files" });
};

module.exports = {
    userProfileimageUpdateController
}