import React from 'react';

const SharedStyles = () => {
  return (
    <style jsx>{`
      .text-shadow-sm {
        text-shadow: 0.04em 0.04rem 0 #81b5ab;
      }
      
      /* Smooth scrolling improvements */
      html {
        scroll-behavior: smooth;
      }
      
      .scroll-section {
        will-change: transform;
      }
      
      .item {
        will-change: transform, opacity;
        backface-visibility: hidden;
        transform: translateZ(0);
      }
      
      /* Mobile responsive improvements */
      @media (max-width: 768px) {
        .item {
          width: 90vw !important;
          height: 85vh !important;
          top: 5vh !important;
          bottom: 5vh !important;
        }
        
        .item_content {
          padding: 1rem !important;
        }
        
        .item_number {
          font-size: 0.875rem !important;
          top: 1rem !important;
          left: 1rem !important;
          height: 2rem !important;
          width: 2rem !important;
        }
      }
      
      @media (max-width: 480px) {
        .item {
          width: 95vw !important;
          height: 90vh !important;
          top: 2vh !important;
          bottom: 2vh !important;
        }
        
        .item_content {
          padding: 0.75rem !important;
        }
        
        .item_number {
          font-size: 0.75rem !important;
          height: 1.75rem !important;
          width: 1.75rem !important;
        }
      }
    `}</style>
  );
};

export default SharedStyles;
