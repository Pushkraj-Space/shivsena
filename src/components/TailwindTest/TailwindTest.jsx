import React from 'react';

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          Tailwind CSS Test
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Colors</h3>
            <p className="text-gray-600">
              Testing basic Tailwind colors like red-500, blue-600, etc.
            </p>
          </div>

          {/* Test Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Testing responsive grid layout with md: and lg: breakpoints.
            </p>
          </div>

          {/* Test Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hover Effects</h3>
            <p className="text-gray-600">
              Testing hover effects and transitions.
            </p>
          </div>
        </div>

        {/* Custom Theme Test */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Custom Theme Test
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-semibold text-gray-800">Primary</p>
              <p className="text-xs text-gray-600">#F37021</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-semibold text-gray-800">Primary Dark</p>
              <p className="text-xs text-gray-600">#e05a1a</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-semibold text-gray-800">Secondary</p>
              <p className="text-xs text-gray-600">#000000</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-light rounded-lg mx-auto mb-2 border border-gray-200"></div>
              <p className="text-sm font-semibold text-gray-800">Gray Light</p>
              <p className="text-xs text-gray-600">#f8f9fa</p>
            </div>
          </div>
        </div>

        {/* Button Test */}
        <div className="mt-8 text-center">
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mr-4">
            Primary Button
          </button>
          <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Outline Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
