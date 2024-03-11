import Category from "../models/legalcategoryschema.js";
import Errorhandler from "../utils/Errorhandler.js";
import catchAsyncError from "../middleware/catchasyncerror.js";
export const createcategory = catchAsyncError(async (req, res, next) => {
  try {
    const { title, content, auther, publicationDate, tags } = req.body;
    const category = await Category.create({
      title,
      content,
      auther,
      publicationDate,
      tags,
    });
    res.json({
      success: true,
      message: "article created successfully",
      category,
    });
  } catch (error) {
    return next(new Errorhandler(error?.message, 500));
  }
});
export const deleteCategory = async (req, res) => {
    try {
      const categoryId = req.params.id;
  
      const deletedCategory = await Category.findByIdAndDelete(categoryId);
  
      if (!deletedCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      res.status(200).json(deletedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  // controllers/categoryController.js



export const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, description } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getCategories = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const regex = new RegExp(search, 'i');

    const categories = await Category.find({
      $or: [{ name: regex }, { description: regex }],
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Category.countDocuments();

    res.status(200).json({
      categories,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




  
  