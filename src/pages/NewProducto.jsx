import React from 'react'
import { FormNewProduct } from '../components/newProduct/FormNewProduct'
import { NewProduct } from '../components/newProduct/NewProduct'
import { Navbar } from '../components/Navbar'

export const NewProducto = () => {
    return (
        <div>
            <Navbar />
            <NewProduct />
        </div>
    )
}
