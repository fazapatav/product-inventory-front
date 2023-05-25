import React, { useState, ChangeEvent, FormEvent } from 'react';
import './CreateProduct.css';

interface FormData {
  id: number;
  name: string;
  inInventory: number;
  min: number;
  max: number;
  price: number;
  image: string;
}

const initialFormData: FormData = {
  id: 0,
  name: '',
  inInventory: 0,
  min: 0,
  max: 0,
  price: 0,
  image: '',
};

export const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de campos requeridos
    const formErrors: Partial<FormData> = {};
    if (!formData.name) {
      formErrors.name = 'El nombre del producto es requerido';
    }
   /* if (formData.inInventory === 0) {
      formErrors.inInventory = 'La cantidad en inventario es requerida';
    }
    if (!formData.price) {
      formErrors.price = 'El precio es requerido';
    }*/

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      // Enviar el formulario al API
      const response = await fetch('http://localhost:7267/Product/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      // Restablecer el formulario después del envío exitoso
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error(error);
      // Manejar errores de envío o respuesta del API
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Crear Producto</h2>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="inInventory">Cantidad en inventario:</label>
        <input
          type="number"
          id="inInventory"
          name="inInventory"
          value={formData.inInventory}
          onChange={handleChange}
        />
        {errors.inInventory && <span className="error">{errors.inInventory}</span>}
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>
      <div>
        <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
<button type="submit">Crear</button>
</form>
);
};
