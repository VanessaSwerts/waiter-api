import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({  table, products });

    res.status(201).json({ message: 'Order created sucessfully!', order });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to create the order!' });
  }
}