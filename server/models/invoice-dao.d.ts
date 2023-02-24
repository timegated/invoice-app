import { Invoice } from "./invoice";

export interface InvoiceDAOImp {
  getInvoices(params: InvoiceParams): Promise<Invoice[]>;
}