import { createContext } from 'react';

import ProductsList from './components/ProductsList';
import Albums from './components/Albums';
import { useFetch } from './Hooks/useFetch';

import './App.css';
import Component1 from './components/User';

const url = 'https://fakestoreapi.com/products';
export const DataContext = createContext();

function App() {
  // const [data] = useFetch(url);

  return (
    <div className='App dark'>
      <h1>Hello</h1>
      {/* <ProductsList data={data} /> */}
      <Component1 />
      {/* <Albums /> */}
    </div>
  );
}

export default App;
