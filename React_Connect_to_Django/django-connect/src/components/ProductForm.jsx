import React, { useEffect, useState } from 'react'
import axios from 'axios';
import api from '../api/api';

const ProductForm = ({onProductAdd, onProductUpdate, editProduct}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('')

    useEffect(() => {
        if(editProduct) {
            setName(editProduct.name)
            setDescription(editProduct.description)
            setPrice(editProduct.price)
            setQuantity(editProduct.quantity)
        }
    }, [editProduct])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // PUT
            if(editProduct) {
                const res = await api.put(`products/${editProduct.id}/`, {
                    name,
                    description, 
                    price,
                    quantity,
                });
                onProductUpdate(res.data)
            }

            // POST
            else {
                const res = await api.post('products/', {
                    name,
                    description,
                    price,
                    quantity
                })
    
                onProductAdd(res.data);
            }
            setName('');
            setDescription('');
            setPrice('');
            setQuantity('');
        } catch(err){
            console.log('Failed to add Product:', err);
        }
    }



  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
        <h3 className='text-3xl font-bold mb-6'>Product add</h3>

        <input 
            type="text" 
            placeholder='Enter Product Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className='border w-2xl p-2 mb-2.5'
        />

        <input 
            type="text" 
            placeholder='Enter Product Description' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className='border w-2xl p-2 mb-2.5'
        />

        <input 
            type="number" 
            placeholder='Enter Product Price' 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className='border w-2xl p-2 mb-2.5'
        />

        <input 
            type="number" 
            placeholder='Enter Quantity' 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            className='border w-2xl p-2 mb-2.5'
        />

        <button type='submit' className='border p-2 bg-red-500 text-white mb-2'>
            Add Product
        </button>
    </form>
  )
}

export default ProductForm