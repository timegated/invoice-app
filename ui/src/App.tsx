import Navigation from './components/Navigation/Navigation';
import iconArrowDown from './assets/icon-arrow-down.svg'
import './app.css';

const App = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <div className="main-content">Add Router and Navigation</div>
      <img src={iconArrowDown} alt="" />
    </>
  )
}

export default App;