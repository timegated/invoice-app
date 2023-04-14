import * as express from 'express';


export const router = express.Router();

import * as invoices from './invoices/invoice-route';


router.use('/invoices', invoices.router);

router.get('/', async (req: express.Request, res: express.Response) => {
  res.send({msg: 'Invoices API'});
});
