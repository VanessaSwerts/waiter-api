import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'Name is required to create the category!' });
    }

    const category = await Category.create({ name, icon });

    res.status(201).json({ message: 'Category created sucessfully!', category });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to create the category!' });
  }
}