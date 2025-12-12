import * as productService from '../services/product.service.js';
import { success, error } from '../utils/response.js';

export const listProducts = async (req, res) => {
  try {
    const result = await productService.getAllProducts(req.query);

    return success(res, 'Products list', result.items, result.pagination);
  } catch (err) {
    return error(res, 'Failed to fetch products', err.message, 500);
  }
};

export const getProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = await productService.getProductById(id);

    if (!product) return error(res, 'Product not found', null, 404);

    return success(res, 'Product detail', product);
  } catch (err) {
    return error(res, 'Failed to fetch product', err.message, 500);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return success(res, 'Product created', product, null, 201);
  } catch (err) {
    return error(res, 'Failed to create product', err.message, 500);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await productService.updateProduct(id, req.body);

    return success(res, 'Product updated', updated);
  } catch (err) {
    return error(res, 'Failed to update product', err.message, 500);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await productService.deleteProduct(id);

    return success(res, 'Product deleted');
  } catch (err) {
    return error(res, 'Failed to delete product', err.message, 500);
  }
};