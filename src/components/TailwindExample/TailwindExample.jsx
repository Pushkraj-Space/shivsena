import React from 'react';

const TailwindExample = () => {
  return (
    <div className="min-h-screen bg-gray-light py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-4 font-heading">
            Tailwind CSS Setup Complete! 🎉
          </h1>
          <p className="text-xl text-text-light font-primary max-w-2xl mx-auto">
            Your React project now has Tailwind CSS configured with custom colors, fonts, and utilities.
          </p>
        </div>

        {/* Grid Layout Example */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-light hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 p-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-text mb-2 font-heading">Custom Colors</h3>
            <p className="text-text-light">
              Using your project's primary orange color (#F37021) and custom color palette.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-light hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-text mb-2 font-heading">Responsive Design</h3>
            <p className="text-text-light">
              Built-in responsive utilities for mobile-first design approach.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-light hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 p-6">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-text mb-2 font-heading">Fast Development</h3>
            <p className="text-text-light">
              Rapid prototyping with utility-first CSS framework.
            </p>
          </div>
        </div>

        {/* Button Examples */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-text mb-6 font-heading">Button Examples</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-light hover:shadow-medium">
              Primary Button
            </button>
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Outline Button
            </button>
            <button className="bg-secondary hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-light hover:shadow-medium">
              Secondary Button
            </button>
          </div>
        </div>

        {/* Typography Examples */}
        <div className="bg-white rounded-lg shadow-light p-8 mb-12">
          <h2 className="text-2xl font-bold text-text mb-6 font-heading">Typography Examples</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-text font-heading">Heading 1 - Main Title</h1>
            <h2 className="text-3xl font-semibold text-text font-heading">Heading 2 - Section Title</h2>
            <h3 className="text-2xl font-semibold text-text font-heading">Heading 3 - Subsection</h3>
            <p className="text-lg text-text-light font-primary leading-relaxed">
              This is a paragraph with custom font family (Poppins) and proper line height for better readability.
            </p>
            <p className="text-base text-text-light font-primary">
              Regular paragraph text with consistent styling and spacing.
            </p>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-lg shadow-light p-8">
          <h2 className="text-2xl font-bold text-text mb-6 font-heading">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-semibold text-text">Primary</p>
              <p className="text-xs text-text-light">#F37021</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-semibold text-text">Primary Dark</p>
              <p className="text-xs text-text-light">#e05a1a</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-semibold text-text">Secondary</p>
              <p className="text-xs text-text-light">#000000</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-light rounded-lg mx-auto mb-2 border border-gray-200"></div>
              <p className="text-sm font-semibold text-text">Gray Light</p>
              <p className="text-xs text-text-light">#f8f9fa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindExample;
