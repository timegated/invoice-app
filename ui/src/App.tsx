import { Invoices } from './components/Invoices/Invoices';
import data from '../data.json';
import './app.css';

const App = (): JSX.Element => {
  console.log(data);
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '75%'
    }}
    >
    <Invoices data={data} />
    </div>
  )
}

export default App;