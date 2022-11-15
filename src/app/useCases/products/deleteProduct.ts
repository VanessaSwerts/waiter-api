import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: 'Product removed sucessfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to delete the product!' });
  }
}