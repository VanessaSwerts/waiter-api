import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const products = await Product.find().where({ category: categoryId });

    res.status(200).json(products);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to list the categories!' });
  }
}