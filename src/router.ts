import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';

import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { deleteProduct } from './app/useCases/products/deleteProduct';

import { createOrder } from './app/useCases/orders/createOrder';
import { listOrders } from './app/useCases/orders/listOrders';
import { updateOrderStatus } from './app/useCases/orders/updateOrderStatus';
import { deleteOrder } from './app/useCases/orders/deleteOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null,`${Date.now()}-${file.originalname}`);
    }
  })
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// Delete category
router.delete('/categories/:categoryId', deleteCategory);

// Get products by category
router.get('/categories/:categoryId/products',listProductsByCategory);

// List products
router.get('/products', listProducts);

// Create Products
router.post('/products', upload.single('image'), createProduct);

// Delete product
router.delete('/products/:productId', deleteProduct);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', updateOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', deleteOrder);