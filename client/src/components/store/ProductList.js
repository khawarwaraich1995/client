export default function ProductList({ data }) {
    return (

        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {data.map((product) => (
                <div key={product.id} className="relative group">
                    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                        <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                        <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                            <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                                View Product
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                        <h3>
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                        </h3>
                        <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
            ))}
        </div>

    )
}