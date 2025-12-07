const prisma = require('../config/db');
const { success, error } = require('../utils/response');

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = await prisma.category.create({
      data: { name, description },
    });

    return success(res, 'Category created successfully', category, null, 201);
  } catch (err) {
    return error(res, 'Failed to create category', err.message, 400);
  }
};

exports.getCategories = async (_req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: { products: true }
    });

    return success(res, 'Categories fetched successfully', categories);
  } catch (err) {
    return error(res, 'Failed to fetch categories', err.message);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: { id: Number(id) },
      include: { products: true }
    });

    if (!category) return error(res, 'Category not found', null, 404);

    return success(res, 'Category fetched successfully', category);
  } catch (err) {
    return error(res, 'Failed to fetch category', err.message);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updatedCategory = await prisma.category.update({
      where: { id: Number(id) },
      data: { name, description }
    });

    return success(res, 'Category updated successfully', updatedCategory);
  } catch (err) {
    return error(res, 'Failed to update category', err.message);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.category.delete({
      where: { id: Number(id) }
    });

    return success(res, 'Category deleted successfully');
  } catch (err) {
    return error(res, 'Failed to delete category', err.message);
  }
};
