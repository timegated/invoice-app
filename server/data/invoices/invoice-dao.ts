import { InvoiceDAOImp } from "../../models/types/invoice-dao";
import { client } from "../..";
import { Invoices } from "../../models/types/invoices";
import { InvoiceParams } from "../../models/types/invoice-params";

export class InvoiceDAO implements InvoiceDAOImp {
  public async getInvoices(params?: InvoiceParams): Promise<Invoices[]> {
    const query = `SELECT * from invoices inv JOIN payments p ON p.invoice_id = inv.id`;
    console.log(query);
    const result = await client.query(query);
    console.log(result.rows);
    return result.rows;
  }
}