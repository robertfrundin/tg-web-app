import { useEffect } from 'react';
import './App.css';

function App() {
  const tg = (window.Telegram.WebApp)

  const onClose = ()=>tg.close()

  useEffect(
    ()=>tg.ready(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <div className="App">
        <h1>HELLO FROM REACT</h1>
        
        <button
         className='Button' 
         onClick={onClose}
         >
            Закрыть
          </button>
    </div>
  );
}

export default App;
