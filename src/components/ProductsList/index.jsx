import ProductCard from './ProductCard';
import { DataContext } from '../../App';

const ProductsList = ({ data }) => {
  return (
    <div>
      {data?.map((el) => (
        <DataContext.Provider value={{ title: el.title, price: el.price }}>
          <ProductCard key={el.id} />
        </DataContext.Provider>
      ))}
    </div>
  );
};

export default ProductsList;
