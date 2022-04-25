export default function Collections({ data }) {
    return (

        <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
            {data.map((collection) => (
                <div
                    key={collection.name}
                    className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
                >
                    <div>
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-lg overflow-hidden"
                        >
                            <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                <img
                                    src={collection.imageSrc}
                                    alt={collection.imageAlt}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                        </div>
                        <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                            <div>
                                <p aria-hidden="true" className="text-sm text-white">
                                    Shop the collection
                                </p>
                                <h3 className="mt-1 font-semibold text-white">
                                    <a href={collection.href}>
                                        <span className="absolute inset-0" />
                                        {collection.name}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}