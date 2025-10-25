
import React from 'react';
import Header from './components/Header';
import MobilityCard from './components/MobilityCard';
import Footer from './components/Footer';
import { MOBILITY_OPTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOBILITY_OPTIONS.map((option) => (
            <MobilityCard key={option.id} option={option} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
