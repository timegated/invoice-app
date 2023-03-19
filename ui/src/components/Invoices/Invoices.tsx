import { InvoicesHeader } from '../InvoicesHeader/InvoicesHeader';
import iconArrowRight from '../../assets/icon-arrow-right.svg';
import noInvoices from '../../assets/illustration-empty.svg';
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
  const getInvoiceStatusStyle = (status: string): string => {
    switch (status) {
      case 'paid':
        return 'invoice-status-paid';
      case 'pending':
        return 'invoice-status-pending';
      default:
        return 'invoice-status-draft';
    }
  };
  const getInvoiceStatusColor = (status: string): string => {
    switch (status) {
      case 'paid':
        return '#33D69F'
      case 'pending':
        return '#FF8F00';
      default:
        return '#373B53'
    }
  };

  const processStatusString = (status: string): string => {
    const capFirst = status.slice(0, 1).toUpperCase();
    return status.replace(/(p|d)/, capFirst);
  };

  const renderNoInvoices = () => {
    return (
      <div
        className="no-invoices-container">
        <img src={noInvoices} alt="" width={500} />
        <span className="title">There is nothing here</span>
        <p>Create an invoice by clicking the <span>New Invoice</span> and get started</p>
      </div>
    )
  }

  return (
    <section
      className="invoice-container">
      <InvoicesHeader count={data.length} />
      {data.length ? data.map((d) => {
        return (
          <div
            key={d.id}
            className="invoice"
          >
            <div className="invoice-id">
              <span>#</span>{d.id}
              <div className="invoice-created">
                Due {d.paymentDue}
              </div>
              <div className="invoice-total-min-width">
                £{d.total}
              </div>
            </div>
            <div className="invoice-client">
              {d.clientName}
            </div>
            <div className="invoice-total">
              £{d.total}
            </div>
            <div className="invoice-client-min-width">
              {d.clientName}
              <div className={`invoice-status-min-width ${getInvoiceStatusStyle(d.status)}`}>
                <span style={{ marginRight: '15px', width: '10px', height: '10px', backgroundColor: `${getInvoiceStatusColor(d.status)}`, borderRadius: '50%' }}></span>
                <span>
                  {processStatusString(d.status)}
                </span>
              </div>
            </div>
            <div className={`invoice-status ${getInvoiceStatusStyle(d.status)}`}>
              <span style={{ marginRight: '15px', width: '10px', height: '10px', backgroundColor: `${getInvoiceStatusColor(d.status)}`, borderRadius: '50%' }}></span>
              <span>
                {processStatusString(d.status)}
              </span>
            </div>
            <a className="invoice-link" href="#invoice-detail">
              <img src={iconArrowRight} alt="" />
            </a>
          </div>
        )
      }) : renderNoInvoices() }
    </section>
  )
}