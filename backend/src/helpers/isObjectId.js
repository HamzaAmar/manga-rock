import mongoose from 'mongoose';

const { Types } = mongoose;
const { ObjectId } = Types;

const checkObjectId = (id, res) => {
  const isObjectId = ObjectId.isValid(id);
  if (!isObjectId)
    return res.status(400).json({
      success: false,
      msg: `${id} ${isObjectId} it 's  not a valid id Please don't change it from the url `
    });
};

export default checkObjectId;
