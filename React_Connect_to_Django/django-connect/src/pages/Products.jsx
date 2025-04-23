import React, { useEffect, useState } from 'react'
import api from '../api/api';
import ProductForm from '../components/ProductForm';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    const fetchProduct = async () => {
        try {   
            const response = await api.get('products/')
            setProducts(response.data);
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    const handleProductAdd = (newProduct) => {
        setProducts((prev) => [...prev, newProduct]);
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`products/${id}/`);
            setProducts((prev) => prev.filter((p) => p.id !== id));
        }catch(err) {
            console.log('Failed to delete the product', err);
        }
    }

    const handleEdit = (product) => {
        setEditProduct(product);
    };

    const handleProductUpdate = (updateProduct) => {
        setProducts((prev) => prev.map((p) => (p.id === updateProduct.id ? updateProduct: p)));
        setEditProduct(null);
    }


  return (
    <div>

        <ProductForm 
            onProductAdd={handleProductAdd} 
            onProductUpdate={handleProductUpdate}
            editProduct={editProduct}
        />

        <hr />

        <h2 className='text-2xl text-center m-2'>Products</h2>
        {products.map((product) => (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>

                <div className='flex gap-2'>
                    <button 
                        onClick={() => handleEdit(product)}
                        className='p-1 bg-blue-500 text-white'
                    >Edit</button>
                    <button 
                        onClick={() => handleDelete(product.id)}
                        className='p-1 bg-blue-500 text-white' 
                    >Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products