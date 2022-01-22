import Men from '../components/Men';
import { Outlet } from 'react-router-dom';

const Shop = () => {
  return (
    <>
      <Men />
      <Outlet />
    </>
  );
};

export default Shop;
