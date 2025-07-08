'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import { FiSearch } from 'react-icons/fi'

export default function ProductImageGallery({ images = [] }) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = images.map((src) => ({ src }))

  return (
    <div className="w-full md:w-1/2 flex flex-col">
      {/* ⬇ 主图滑动区域容器 */}
      <div className="relative w-full max-w-xl aspect-[1/1] overflow-hidden rounded-md border">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="w-full flex-shrink-0 object-contain cursor-zoom-in"
              onClick={() => setOpen(true)}
            />
          ))}
        </div>

        {/* 放大镜按钮 */}
        <button
          className="cursor-pointer absolute bottom-2 right-2 p-2 bg-white border rounded-full shadow-md hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          <FiSearch size={18} />
        </button>
      </div>

      {/* 缩略图导航栏 */}
      <div className="mt-4 flex gap-3 w-full">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            onClick={() => setCurrentIndex(idx)}
            className={`w-16 h-16 object-cover rounded border cursor-pointer transition-transform duration-200 ${
              idx === currentIndex
                ? 'border-black scale-105'
                : 'border-gray-200 hover:scale-105'
            }`}
          />
        ))}
      </div>

      {/* 放大查看 Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails, Fullscreen]}
      />
    </div>
  )
}
