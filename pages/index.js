import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import allmodels from './csvjson.json';
import Result from '../components/Result';

function App() {
  const searchInput = useRef(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
  }, []);

  const typedInSearch = (e) => {
    if (e.code == "ControlLeft" || e.code == "ShiftLeft" || e.code == "Tab" || e.code == "CapsLock" || e.code == "AltLeft") return;
    let count = 0;
    const foundModels = allmodels.filter((model, idx) => model.title.toLowerCase().includes(searchInput.current.value.toLowerCase()) || model.manufacturer.toLowerCase().includes(searchInput.current.value.toLowerCase()) && 5 >= count && count++);
    setResults(foundModels);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontFamily: 'Akira' }}>Guitar Exchange</h1>

        <div className='searchContainer'>
          <input ref={searchInput} onKeyDown={typedInSearch} className='searchInput' />
          <div>
            { results.map(res => <>
              <Result result={res} />
            </>)}
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;