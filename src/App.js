import './App.css';
import { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';

// -----------

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={
        (event) => {
          setSearchTerm(event.target.value);
        }} />
      {JSONDATA.filter((val) =>{
        if(val === '') {
          return val;
        } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        )
      })

      }
    </div>
  );
}

export default App;
