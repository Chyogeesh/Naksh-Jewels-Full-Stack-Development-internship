import Image from 'next/image';

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div>
          <p className="text-2xl font-semibold text-green-600">₹{product.price}</p>
          <p className="text-gray-600 mt-2">Category: {product.category}</p>
          <p className="text-gray-600 mt-2">Description: {product.description || 'Handcrafted in Gwalior with love.'}</p>
        </div>
      </div>
    </div>
  );
}
