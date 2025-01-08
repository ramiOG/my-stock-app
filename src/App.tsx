import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { Product } from "./types/Product";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const saveToLocalStorage = (products: Product[]) => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const handleAddProduct = (product: Product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    saveToLocalStorage(updatedProducts);
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    saveToLocalStorage(updatedProducts);
  };

  return (
    <div className="min-h-screen  bg-gray-100 p-4">
      <h1 className="mb-4 text-2xl font-bold">Gestión de Productos</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <div className="mt-8">
        <ProductList
          products={products}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default App;
