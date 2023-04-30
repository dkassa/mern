import ProductListPageComponent from "./components/ProductListPageComponent";
import axios from "axios";

const getProducts = async () => {
    const { data } = await axios.get('/api/products');
    return data
}

const categories = async () => {
  const { data } = await axios.get('/api/categories');
  return data
}

const ProductListPage = () => {

  return <ProductListPageComponent categories={categories} getProducts={getProducts} />;
};

export default ProductListPage;

