import { Invoices } from '../models/types/invoices';
import { InvoiceDAO } from '../data/invoices/invoice-dao';

const invoiceDao = new InvoiceDAO();

export const fetchAllInvoices = async (): Promise<Invoices[]> => {
  try {
    const results = await invoiceDao.getInvoices();
    return results;
  } catch (error) {
    throw error;
  }
}