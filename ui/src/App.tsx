import './app.css';

const App = (): JSX.Element => {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // display: 'grid',
      maxWidth: '75%'
    }}
    >
    {Array.from([1,2,1]).map((item, index) => {
      console.log(item)
      return (
        <div
        key={index}
        style={{
          width: '100%',
          border: '1px solid red',
          height: '100px',
          marginLeft: '1rem',
          marginTop: '1rem'
        }}
      >
        {item}
      </div>
      )
    })}
    </div>
  )
}

export default App;