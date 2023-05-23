import { Invoices } from './components/Invoices/Invoices';
import Navigation from './components/Navigation/Navigation';
import data from '../data.json';
import './app.css';

const App = (): JSX.Element => {
  console.log(data);
  const noData: any = []
  return (
    <>
    <section className="main-invoice-content">
    <Navigation />
    <Invoices data={data} />
    </section>
    </>
  )
}

export default App;