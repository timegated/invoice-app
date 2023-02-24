import express from 'express';

const router = express.Router();

const fetchAllInvoices = async (): Promise<string> => {
  try {
    
    return 'Invoices';
  } catch (error) {
    throw error;
  }
}


router.get('/invoices', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
        
    return 'Fetch Invoices';
  } catch (error) {
    console.error(error);
    throw error;
  }
});



export default router;