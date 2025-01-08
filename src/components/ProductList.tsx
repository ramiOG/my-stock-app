import React from "react";
import { Product } from "../types/Product";

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onDeleteProduct,
}) => {
  return (
    <div className="rounded bg-white p-4 shadow">
      <h2 className="mb-4 text-lg font-bold">Lista de productos</h2>
      {products.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Descripción</th>
              <th className="border px-4 py-2">Precio</th>
              <th className="border px-4 py-2">Cantidad</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">
                  ${product.price.toFixed(2)}
                </td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => onDeleteProduct(product.id)}
                    className="rounded bg-red-500 px-2 py-1 text-white"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
