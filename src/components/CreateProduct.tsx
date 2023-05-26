import React, { useState, ChangeEvent, FormEvent,useId} from 'react';
import './CreateProduct.css';
import {AddProductIcon} from './Icons';
import {createProduct} from '../api/products';

interface FormData {
  id: number;
  name: string;
  inInventory: number;
  min: number;
  max: number;
  price: number;
  image: string;
}

interface FormError {
  name: string;
  inInventory: string;
  min: string;
  max: string;
  price: string;
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
  const [errors, setErrors] = useState<FormError>({name:"",inInventory:"",min:"",max:"",price:"",image:""});
  const createProductCheckboxId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de campos requeridos
    const formErrors: FormError = {name:"",inInventory:"",min:"",max:"",price:"",image:""};
    if (!formData.name) {
      formErrors.name = 'El nombre del producto es requerido';
    }
    if (formData.inInventory === 0) {
      formErrors.inInventory = 'La cantidad en inventario es requerida';
    }
    if (!formData.price) {
      formErrors.price = 'El precio es requerido';
    }
    if (!formData.min) {
      formErrors.min = 'El Min es requerido';
    }
    if (!formData.max) {
      formErrors.max = 'El Max es requerido';
    }
    if (!formData.image) {
      formErrors.image = 'La imagen es requerida';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await createProduct(formData);
      alert('Producto creado');
      setFormData(initialFormData);
      setErrors({name:"",inInventory:"",min:"",max:"",price:"",image:""});
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <>
      <label className='product-form-button' htmlFor={createProductCheckboxId}>
        <AddProductIcon />
      </label>
      <input id={createProductCheckboxId} type='checkbox' hidden />

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
          <label htmlFor="min">Min:</label>
          <input
            type="number"
            id="min"
            name="min"
            value={formData.min}
            onChange={handleChange}
          />
          {errors.min && <span className="error">{errors.min}</span>}
        </div>
        <div>
          <label htmlFor="min">Max:</label>
          <input
            type="number"
            id="max"
            name="max"
            value={formData.max}
            onChange={handleChange}
          />
          {errors.max && <span className="error">{errors.max}</span>}
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
    </>
  );
};
