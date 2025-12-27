import React from 'react';

const PortfolioPreview: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      overflow: 'hidden'
    }}>
      <iframe 
        src="/index.html" 
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          display: 'block'
        }}
        title="Fedi Haddad Portfolio"
      />
    </div>
  );
};

export default PortfolioPreview;