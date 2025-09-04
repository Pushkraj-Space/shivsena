import React from 'react'
import CircularGallery from './CircularGalary'

const SimpleSlider = () => {
  return (
    <div className="w-full">
      {/* Circular Gallery */}
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#000000" borderRadius={0.05} scrollEase={0.02}/>
      </div>
      
      {/* Title Section */}
      <div className="text-center py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            व्यंगचित्र
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
            बाळासाहेब ठाकरे यांचे राजकीय व्यंगचित्रे
          </p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default SimpleSlider