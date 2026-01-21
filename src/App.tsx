import { useState, useEffect } from 'react'
import Header from './header'
import mainImg from "./assets/mainImg.png"
import { FiMenu } from 'react-icons/fi'
import Product from './products'
import NewArrival from './newArrival'
import Footer from './footer'
import ProductDetails from './productDetails'
import AccountDropdown from './accountDropdown'
import WishlistIcon from './wishlistCount'
import CartIcon from './cartIcon'



interface AppProps {
  onSignUpClick: () => void;
  onAboutClick: () => void
  onHomeClick: () => void;
  onContactClick: () => void;
  onLoginClick: () => void;
  onMyAccountClick: () => void;
  onAddToWishlist: (product: any) => void;
  onWishlistClick: () => void;
  wishlistCount: number;
  onAddToCart: (product: any) => void;
  onCartClick: () => void;
  cartCount: number;
  wishlistIds: number[];



}

function App({ onSignUpClick, onHomeClick, onAboutClick, onContactClick, onLoginClick, onMyAccountClick, onAddToWishlist, onWishlistClick, wishlistCount, onAddToCart, onCartClick, cartCount, wishlistIds }: AppProps) {

  interface ProductType {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
    discountPercentage: number;



  }

  const [products, setProducts] = useState<ProductType[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [showCategories, setShowCategories] = useState(false);



  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  if (selectedProductId !== null) {
    return (
      <>
        <Header onHomeClick={onHomeClick} onSignUpClick={onSignUpClick} onAboutClick={onAboutClick} onContactClick={onContactClick} currentScreen="app">
          <WishlistIcon
            count={wishlistCount}
            onClick={onWishlistClick}
          />

          <CartIcon
            count={cartCount}
            onClick={onCartClick}
          />
          <AccountDropdown onLogout={() => onLoginClick()} onMyAccountClick={onMyAccountClick} />
        </Header>

        <ProductDetails
          productId={selectedProductId}
          onBack={() => setSelectedProductId(null)}
          onAddToCart={onAddToCart}
        />

        <Footer />
      </>
    );
  }





  return (
    <>
      <div className='p-10 ' >
        <Header onSignUpClick={onSignUpClick}
          onHomeClick={onHomeClick}
          onAboutClick={onAboutClick}
          onContactClick={onContactClick}
          currentScreen='app'>
          <WishlistIcon
            count={wishlistCount}
            onClick={onWishlistClick}
          />

          <CartIcon
            count={cartCount}
            onClick={onCartClick}
          />



          <AccountDropdown onLogout={() => onLoginClick()} onMyAccountClick={onMyAccountClick} />

        </Header>


      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-10 py-6 gap-4">

        <button
          onClick={() => setShowCategories(!showCategories)}
          className="md:hidden bg-gray-100 p-3 rounded font-medium"
        >
          <FiMenu size={24} />
        </button>

        {showCategories && (
          <div className="bg-white p-5 rounded md:hidden">
            <ul className="space-y-4">
              <li>Woman's Fashion</li>
              <li>Men's Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
        )}

        <div className="hidden md:block w-60 bg-white p-5 rounded h-[500px]">
          <ul className="space-y-7">
            <li>Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        <div className="hidden md:block w-[2px] bg-gray-200 h-[500px]"></div>

        <main className="w-full md:flex-1 h-[300px] md:h-[500px]">
          <img src={mainImg} alt="main img" className='w-full h-full object-contain md:object-cover rounded' />
        </main>
      </div>

      <div className="px-12 py-10">
        <h2 className="text-4xl font-semibold mb-6 px-5">Explore Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, showAll ? products.length : 4).map((product) => (
            <Product
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              thumbnail={product.thumbnail}
              discountPercentage={product.discountPercentage}
              onClick={(id) => setSelectedProductId(id)}
              onAddToWishlist={() => onAddToWishlist(product)}
              onAddToCart={() => onAddToCart(product)}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition"
          >
            {showAll ? "Show Less" : "Show More Images"}
          </button>
        </div>
      </div>


      <NewArrival />
      <Footer myaccountclick={onMyAccountClick} loginclick={onLoginClick} cartclick={onCartClick} wishlistclick={onWishlistClick} />

    </>
  )
}

export default App;
