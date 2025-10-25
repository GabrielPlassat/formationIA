
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          Se déplacer depuis Mouans-Sartoux
        </h1>
        <p className="mt-2 text-md text-slate-600">
          Votre guide des solutions de mobilité pour tous vos trajets.
        </p>
      </div>
    </header>
  );
};

export default Header;
