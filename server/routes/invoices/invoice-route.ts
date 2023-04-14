import express from 'express';
import { fetchAllInvoices } from '../../services/invoices';
export const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
      const invoices = await fetchAllInvoices();
      res.status(200).send(invoices);
    return 'Fetch Invoices';
  } catch (error) {
    console.error(error);
    throw error;
  }
});


