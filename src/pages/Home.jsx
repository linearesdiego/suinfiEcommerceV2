import React from 'react'
import { Carousel } from '../components/Carousel'
import { Products } from '../components/Products'
import { Galery } from '../components/Galery'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="bg-ecommerce">
                <Carousel />
                <Products />
                <Galery />
                <Footer />
            </div>
        </>

    )
}
