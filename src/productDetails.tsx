import { useEffect, useState } from "react";


interface ProductDetailsProps {
  productId: number;
 
  onBack: () => void;
}

interface Product {
  title: string;
  price: number;
  rating: number;
  description: string;
  images: string[];
}

const ProductDetails = ({ productId, onBack }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState("");


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setActiveImage(data.images[0]);
      });
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-10 py-10">
      <button onClick={onBack} className="mb-6 text-red-500">
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <img
            src={activeImage}
            className="w-full h-[400px] object-contain bg-gray-100 rounded"
          />

          <div className="flex gap-3 mt-4">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-contain bg-gray-100 rounded cursor-pointer border ${
                  activeImage === img ? "border-red-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

      
        <div>
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p className="text-red-500 text-2xl mt-2">${product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
