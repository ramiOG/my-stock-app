import React, { useState } from "react";
import { Product } from "../types/Product";

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !quantity) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name,
      description,
      price: Number(price),
      quantity: Number(quantity),
    };

    onAddProduct(newProduct);
    // Limpiar formulario
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };
  /* handleSubmit */

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="rounded bg-white p-4 shadow"
    >
      <div className="mb-4">
        <label className="text-gray-700 block">
          Nombre de Producto:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-2"
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 block">
          Descripcion:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded border p-2"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 block">
          Precio:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber || '')}
            className="w-full rounded border p-2"
            required
            min={0}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 block">
          Cantidad:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.valueAsNumber || '')}
            className="w-full rounded border p-2"
            required
            min={1}
          />
        </label>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Agregar Producto
      </button>
    </form>
  );
};

export default ProductForm;
