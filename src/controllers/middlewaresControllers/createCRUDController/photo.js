const mongoose = require('mongoose');

const photo = async (model, req, res) => {
  const Model = mongoose.model(model);

  const updates = {
    photo: req.body.photo,
  };

  const tmpResult = await Model.findOneAndUpdate(
    { _id: req.admin._id, removed: false },

    { $set: updates },
    { new: true, runValidators: true }
  );

  // If no results found, return document not found
  if (!tmpResult) {
    return res.status(404).json({
      success: false,
      result: null,
      message: 'No document found ',
    });
  } else {
    
    // Return success resposne
    let result = {
      _id: tmpResult._id,
      enabled: tmpResult.enabled,
      email: tmpResult.email,
      name: tmpResult.name,
      surname: tmpResult.surname,
      photo: tmpResult.photo,
      role: tmpResult.role,
    };

    return res.status(200).json({
      success: true,
      result,
      message: 'we update this document photo ',
    });
  }
};
module.exports = photo;
