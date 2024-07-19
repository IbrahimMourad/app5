import { Fragment } from 'react';
import { useFetch } from '../../Hooks/useFetch';

const url = 'https://jsonplaceholder.typicode.com/albums';

const ProductsList = () => {
  const [data, setData] = useFetch(url);

  return (
    <div>
      {data?.map((el) => (
        <Fragment key={el.id}>
          <h6>album</h6>

          <p>{el.title}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default ProductsList;
