import React from 'react'
import { Link } from 'react-router-dom'

function Card({id,name,image,price}) {
    return (
        <div>
            {/* Product Cards */}
            <div key={id} className="border border-gray-300 rounded-lg p-2.5 max-w-[700px] max-h-[500px] text-center">
                <img className="w-56 h-52" src={image} alt={name} />
                <h2>{name}</h2>
                <p className="pb-2 font-bold">Price: ${price}</p>

                <Link to={`/product/${id}`} className="bg-cyan-500 rounded-lg p-1 text-white hover:bg-gray-400 mb">
                    View Details
                </Link>
            </div>
        </div>     
  )
}

export default Card
