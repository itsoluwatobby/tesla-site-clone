import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react'

function App() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <div className="App">
      <Header 
        burgerStatus={burgerStatus}
        setBurgerStatus={setBurgerStatus} 
      />
      <Home 
        burgerStatus={burgerStatus}
      />
    </div>
  );
}

export default App;
