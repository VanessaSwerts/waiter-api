import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

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