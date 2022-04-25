const Perks = ({ data }) => {
    return (
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
                {data.map((perk) => (
                    <div
                        key={perk.name}
                        className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                    >
                        <div className="md:flex-shrink-0">
                            <div className="flow-root">
                                <img
                                    className="-my-1 h-24 w-auto mx-auto"
                                    src={perk.imageUrl}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                            <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                                {perk.name}
                            </h3>
                            <p className="mt-3 text-sm text-gray-500">
                                {perk.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Perks
