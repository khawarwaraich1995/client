import Collections from '../components/store/Collections';
import Perks from '../components/store/Perks'
import ProductList from '../components/store/ProductList';

const collections = [
  {
    name: "Women's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: "Men's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
]
const perks = [
  {
    name: 'Free returns',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]
const products = [
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  // More products...
]

const Home = () => {

  return (
    <main>
      {/* Hero section */}
      <div className="relative">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="hidden absolute inset-0 sm:flex sm:flex-col"
        >
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="flex-1 relative w-full bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Mid-Season Sale
            </h1>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block bg-primary border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-primary"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="-mt-96 relative sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
        <Collections data={collections} />
        </section>
      </div>

    {/* Featured items */}
      <section
        aria-labelledby="perks-heading"
        className="bg-gray-50 border-t border-gray-200"
      >
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-medium text-gray-900">Featured Products</h2>
              <a href="#" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <ProductList data={products} />
          </div>
        </div>
      </section>

      {/* Discounted items */}
      <section
        aria-labelledby="perks-heading"
        className="bg-gray-50 border-t border-gray-200"
      >
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-lg font-medium text-gray-900">Discounted Products</h2>
              <a href="#" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
            <ProductList data={products} />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="perks-heading"
        className="bg-gray-50 border-t border-gray-200"
      >
        <h2 id="perks-heading" className="sr-only">
          Our perks
        </h2>
        <Perks data={perks} />
      </section>
    </main>
  );
};

export default Home;
