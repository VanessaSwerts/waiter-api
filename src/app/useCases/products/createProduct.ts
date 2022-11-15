import { Request, Response } from 'express';

import { Product } from '../../models/Product';
import { Category } from '../../models/Category';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Name is required to create the order!' });
    }

    if (!price) {
      return res.status(400).json({ message: 'Price is required to create the order!' });
    }

    if (!category) {
      return res.status(400).json({ message: 'Category is required to create the order!' });
    }

    const categoryExists = await Category.findById({ _id: category });

    if (!categoryExists) {
      return res.status(404).json({ message: 'This category does not exists!' });
    }

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath
    });

    res.status(201).json({ message: 'Product created sucessfully!', product });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to create the Product!' });
  }
}