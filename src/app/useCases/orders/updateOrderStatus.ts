import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function updateOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({ message: 'Invalid value! The status should be one of these: WAITING, IN_PRODUCTION or DONE' });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.status(200).json({ message: 'Order status updated sucessfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to update the order!' });
  }
}