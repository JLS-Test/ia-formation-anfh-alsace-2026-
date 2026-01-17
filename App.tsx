
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ToolCard from './components/ToolCard';
import AIAssistant from './components/AIAssistant';
import HTMLTraining from './components/HTMLTraining';
import { TOOLS_DATA } from './constants';
import { ToolUseCase } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTool, setSelectedTool] = useState<ToolUseCase | null>(null);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-12">
            <header className="max-w-3xl">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Acculturez-vous à l'IA <br/><span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-4">pour la formation</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Explorez ce panorama d'outils conçu spécifiquement pour les Chargés de Formation de la Fonction Publique Hospitalière. Gagnez en efficacité, automatisez le pilotage et enrichissez vos contenus pédagogiques.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOOLS_DATA.map(tool => (
                <ToolCard key={tool.id} tool={tool} onSelect={setSelectedTool} />
              ))}
            </div>

            <section className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl font-bold mb-4">Envie d'apprendre le code HTML ?</h3>
                <p className="text-slate-300 mb-6">
                  Découvrez notre module interactif pour apprendre les bases du HTML utiles à la mise en page de vos cours sur LMS.
                </p>
                <button 
                  onClick={() => setCurrentPage('html-training')}
                  className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold transition-all shadow-lg"
                >
                  Suivre la formation HTML
                </button>
              </div>
              <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
            </section>
          </div>
        );
      case 'assistant':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
               <h2 className="text-2xl font-bold text-slate-900">Laboratoire Interactif</h2>
               <button onClick={() => setCurrentPage('home')} className="text-blue-600 text-sm font-semibold hover:underline">← Retour au panorama</button>
            </div>
            <AIAssistant />
          </div>
        );
      case 'html-training':
        return <HTMLTraining />;
      case 'ethics':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Cadre Éthique & RGPD en Santé</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                L'usage de l'IA générative en établissement de santé nécessite une vigilance particulière. Voici les piliers fondamentaux pour une utilisation responsable par les services de formation.
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "Anonymisation stricte", desc: "Ne saisissez jamais d'identifiants d'agents ou de données de santé patients dans les IA publiques (ChatGPT, Gemini, etc.).", icon: "👤" },
                  { title: "Droit d'auteur", desc: "Vérifiez toujours l'originalité des contenus pédagogiques générés et citez l'usage de l'IA.", icon: "⚖️" },
                  { title: "Validation humaine", desc: "L'IA propose, l'humain dispose. Relisez systématiquement chaque programme ou support généré.", icon: "🧠" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return <div>Page non trouvée</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 ANFH Alsace - Séminaire Responsables & Chargés de Formation
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs font-semibold text-blue-600">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Contact Délégation</a>
            <a href="#" className="hover:underline">Guide Pratique IA</a>
          </div>
        </div>
      </footer>

      {/* Modal for Tool Detail */}
      {selectedTool && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="text-5xl">{selectedTool.icon}</div>
              <button 
                onClick={() => setSelectedTool(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedTool.title}</h3>
            <p className="text-slate-500 mb-6">{selectedTool.description}</p>
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
              <h4 className="text-blue-800 font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Exemple de Prompt (Instructions à copier)
              </h4>
              <div className="bg-white p-4 rounded-xl text-sm font-mono text-slate-700 border border-blue-200">
                {selectedTool.aiPromptTemplate}
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(selectedTool.aiPromptTemplate);
                  alert('Prompt copié ! Vous pouvez maintenant le tester dans l\'Assistant.');
                }}
                className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                Copier le prompt
              </button>
            </div>

            <div className="flex gap-4">
               <button 
                onClick={() => {
                  setCurrentPage('assistant');
                  setSelectedTool(null);
                }}
                className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
               >
                 Tester maintenant
               </button>
               <button 
                onClick={() => setSelectedTool(null)}
                className="flex-1 bg-slate-100 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors"
               >
                 Fermer
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
