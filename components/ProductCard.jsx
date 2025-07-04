import Link from 'next/link';
export function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-xl">
      <img src={product.image} className="w-full h-48 object-cover" />
      <h2 className="text-xl mt-2">{product.name}</h2>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`} className="text-blue-600">View</Link>
    </div>
  );
}