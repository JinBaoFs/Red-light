'use client';
import ProductItem from './ProductItem';
import ScrollFadeUpSection from "./ScrollFadeUpSection"

const products = [
  {
    id: 1,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro_01.jpg',
    hoverImage: '/images/pro_hover01.webp',
  },
  {
    id: 1,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro_01.jpg',
    hoverImage: '/images/pro_hover01.webp',
  },
  {
    id: 1,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro_01.jpg',
    hoverImage: '/images/pro_hover01.webp',
  },
  {
    id: 1,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro_01.jpg',
    hoverImage: '/images/pro_hover01.webp',
  },
];

const RedLightTherapyProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product,idx) => (
        <ScrollFadeUpSection delay={idx*0.2} key={idx}>
          <ProductItem key={idx} product={product} />
        </ScrollFadeUpSection>
      ))}
    </div>
  );
};

export default RedLightTherapyProducts;


