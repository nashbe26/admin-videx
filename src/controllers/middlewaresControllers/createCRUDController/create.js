const create = async (Model, req, res) => {
  // Creating a new document in the collection
  req.body.removed = false;
  console.log("model",req.body);
  console.log("model",req.file);
  let images = [];

  if (req.file)
    req.body.product_images = "https://admin.auto-videx.com/public/uploads/product/"+req.file.filename;

  const result = await new Model({
    ...req.body
  }).save();

  // Returning successfull response
  return res.status(200).json({
    success: true,
    result,
    message: 'Successfully Created the document in Model ',
  });
};

module.exports = create;
