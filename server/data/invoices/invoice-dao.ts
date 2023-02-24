import { InvoiceDAOImp } from "../../models/invoice-dao";
import pg from 'pg';

export class InvoiceDAO implements InvoiceDAOImp {
  private connection;
  constructor(connection: any) {
    this.connection = new pg.Connection();
  }

  public async getInvoices(params: InvoiceParams): Promise<any> {
    return [];
  }
}