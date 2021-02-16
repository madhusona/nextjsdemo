import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image'
export default function Product() {
    const router = useRouter()
    const { name, price, description, imageurl } = router.query
    console.log(router.query)
    return (
        <div className="product">
            <div className="title">
                <a href="#" className="previous">&laquo; Previous</a>
                <img src={imageurl} />
            </div>

            
        </div>
    )
}