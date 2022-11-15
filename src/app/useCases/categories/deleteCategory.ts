import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    await Category.findByIdAndDelete(categoryId);

    res.status(200).json({ message: 'Category removed sucessfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to delete the category!' });
  }
}