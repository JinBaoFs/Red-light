'use client';

import React from 'react';
import ScrollFadeUpSection from "@/components/ScrollFadeUpSection"
import ProductItem from '@/components/ProductItem';

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
  {
    id: 2,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro-01.webp',
    hoverImage: '/images/pro-02.webp',
  },
  {
    id: 2,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro-01.webp',
    hoverImage: '/images/pro-02.webp',
  },
  {
    id: 2,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro-01.webp',
    hoverImage: '/images/pro-02.webp',
  },
  {
    id: 2,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro-01.webp',
    hoverImage: '/images/pro-02.webp',
  },
  {
    id: 2,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro-01.webp',
    hoverImage: '/images/pro-02.webp',
  },
  {
    id: 2,
    name: 'YOULOUMI Red Light Therapy Belt - IRW-001',
    price: 119.99,
    defaultImage: '/images/pro-01.webp',
    hoverImage: '/images/pro-02.webp',
  },
];

const ProductCenter = () => {
  return (
    <div className="bg-[#f8f8f8]">
        <section className="px-4 py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Product Center</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((item,idx) => (
            <ScrollFadeUpSection delay={idx*0.1} key={idx}>
                <ProductItem key={idx} product={item} />
                </ScrollFadeUpSection>
            ))}
        </div>
        </section>
    </div>
  );
};

export default ProductCenter;
