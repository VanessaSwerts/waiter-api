import { Request, Response } from 'express';

import { Order } from '../../models/Order';
import { Product } from '../../models/Product';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    if (!table || typeof table !== 'string') {
      return res.status(400).json({ message: 'Table is required to create the order!' });
    }

    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'Products is required to create the order!' });
    }

    products.forEach(async (el: { product: string; }) => {
      const productExists = await Product.findById({ _id: el.product });

      if (!productExists) {
        return res.status(404).json({ message: 'The product ordered does not exists!' });
      }
    });

    const order = await Order.create({ table, products });

    res.status(201).json({ message: 'Order created sucessfully!', order });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to create the order!' });
  }
}