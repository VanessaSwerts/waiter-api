import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.status(200).json({ message: 'Order removed sucessfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to delete the order!' });
  }
}