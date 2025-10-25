
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Mobilité Mouans-Sartoux. Informations fournies à titre indicatif.</p>
      </div>
    </footer>
  );
};

export default Footer;
