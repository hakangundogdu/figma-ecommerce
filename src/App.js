import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Stories from './pages/Stories';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';

import './styles.scss';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Products/:id" element={<ProductDetail />} />
        <Route path="Stories" element={<Stories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
