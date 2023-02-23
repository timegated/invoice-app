import iconArrowRight from '../../assets/icon-arrow-right.svg';
import './invoices.css';

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export interface InvoicesProps {
  data: Invoice[];
}


export const Invoices = ({ data }: InvoicesProps): JSX.Element => {
  console.log('Invoices: ', data);
  const getInvoiceStatusStyle = (status: string): string => {
    switch (status) {
      case 'paid':
        return 'invoice-status-paid';
      case 'pending':
        return 'invoice-status-pending';
      default:
        return 'invoice-status-draft';
    }
  }
  return (
    <section
      className="invoice-container">
      {data.map((d) => {
        return (
          <div
            key={d.id}
            className="invoice"
          >
            <div className="invoice-id">
              <span>#</span>{d.id}
            </div>
            <div className="invoice-created">
              {d.createdAt}
            </div>
            <div className="invoice-client">
              {d.clientName}
            </div>
            <div className="invoice-total">
              £{d.total}
            </div>
            <div className={`invoice-status ${getInvoiceStatusStyle(d.status)}`}>
              <span>
                {d.status}
              </span>
            </div>
            <a href="#invoice-detail">
              <img src={iconArrowRight} alt="" />
            </a>
          </div>
        )
      })}
    </section>
  )
}