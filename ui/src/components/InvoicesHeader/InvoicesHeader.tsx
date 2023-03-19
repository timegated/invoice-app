import iconPlus from '../../assets/icon-plus.svg';
import iconArrowRight from '../../assets/icon-arrow-right.svg';
import './invoices-header.css';
import { useState } from 'react';

interface InvoicesHeaderProps {
  count: number;
}

export const InvoicesHeader = ({ count }: InvoicesHeaderProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <section className="invoices-header-container">
      <div className="invoice-header-title">
        <span className="title">
          Invoices
        </span>
        <span>There are {count} pending invoices</span>
      </div>
      <article className="invoice-header__actions">
        <div className={`invoice-header__filter`} onClick={() => setActive(!active)}>
          <span>Filter by status</span>
          <img className={`${active ? 'active' : ''}`} src={iconArrowRight} alt="filter options icons arrow up" />
        </div>
        <button className="invoice-header__new">
          <div>
            <img src={iconPlus} alt="add a new invoice plus sign" />
          </div>
          New Invoice
        </button>
      </article>
    </section>
  )
}
