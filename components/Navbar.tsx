
import React from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">ANFH Alsace</h1>
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Séminaire IA 2026</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => onNavigate('home')}
              className={`${activePage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'} px-1 py-4 text-sm font-medium transition-colors`}
            >
              Panorama Outils
            </button>
            <button 
              onClick={() => onNavigate('assistant')}
              className={`${activePage === 'assistant' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'} px-1 py-4 text-sm font-medium transition-colors`}
            >
              Assistant IA
            </button>
            <button 
              onClick={() => onNavigate('html-training')}
              className={`${activePage === 'html-training' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'} px-1 py-4 text-sm font-medium transition-colors`}
            >
              Formation HTML
            </button>
            <button 
              onClick={() => onNavigate('ethics')}
              className={`${activePage === 'ethics' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'} px-1 py-4 text-sm font-medium transition-colors`}
            >
              Cadre & Éthique
            </button>
          </div>

          <div className="flex items-center">
             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Mode Demo Actif
             </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
