import { useState } from 'react';
import './App.css';
import AvailableCurrencyList from './components/AvailableCurrencyList';
import DispenceCurrency from './components/DispenceCurrency'

function App() {
  const [renderAvailable, setRenderAvailable]  = useState(false);
  const setRender = () =>{
    console.log('main');
    setRenderAvailable(!renderAvailable);
  }
  return (
    <div className="App">
      <AvailableCurrencyList renderAvailable={renderAvailable}/>
      <DispenceCurrency setRenderAvailable={i => {setRender()}} />
    </div>
  );
}

export default App;
