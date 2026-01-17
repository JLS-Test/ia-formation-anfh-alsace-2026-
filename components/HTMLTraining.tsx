
import React, { useState } from 'react';

const HTML_LESSONS = [
  {
    title: "Les bases de la structure",
    description: "Apprenez à utiliser les titres et les paragraphes pour structurer vos contenus LMS.",
    defaultCode: "<h2>Titre de ma formation</h2>\n<p>Ceci est un paragraphe d'introduction pour mes apprenants.</p>",
    instruction: "Modifiez le titre entre les balises <h2> et le texte du paragraphe."
  },
  {
    title: "Les listes à puces",
    description: "Indispensables pour lister des objectifs pédagogiques ou des pré-requis.",
    defaultCode: "<h3>Objectifs de la session :</h3>\n<ul>\n  <li>Comprendre les enjeux de l'IA</li>\n  <li>Maîtriser le prompt engineering</li>\n  <li>Appliquer l'éthique au quotidien</li>\n</ul>",
    instruction: "Ajoutez un quatrième élément de liste en utilisant la balise <li>."
  },
  {
    title: "Mise en valeur et liens",
    description: "Mettez en gras les mots-clés et créez des liens vers des ressources externes.",
    defaultCode: "<p>Veuillez consulter le <strong>guide ANFH</strong> en cliquant <a href='https://www.anfh.fr' target='_blank'>ici</a>.</p>",
    instruction: "Changez le texte du lien et mettez un autre mot en gras avec <strong>."
  }
];

const HTMLTraining: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState(HTML_LESSONS[0].defaultCode);

  const lesson = HTML_LESSONS[currentStep];

  const handleNext = () => {
    if (currentStep < HTML_LESSONS.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setCode(HTML_LESSONS[nextStep].defaultCode);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setCode(HTML_LESSONS[prevStep].defaultCode);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Formation HTML pour la Formation</h2>
        <p className="text-slate-600">Apprenez à formater vos contenus numériques sans dépendre des services techniques.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
        {/* Editor Side */}
        <div className="flex flex-col bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-slate-800 px-4 py-3 flex justify-between items-center border-b border-slate-700">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Éditeur de Code</span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-4">
              <h4 className="text-blue-400 font-bold mb-1">{lesson.title}</h4>
              <p className="text-slate-400 text-sm">{lesson.instruction}</p>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 w-full bg-slate-900 text-green-400 font-mono text-sm p-4 border border-slate-700 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none resize-none"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Preview Side */}
        <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
            <div className="flex gap-2">
               <div className="w-4 h-4 rounded-full bg-slate-200"></div>
               <div className="w-24 h-4 rounded bg-slate-200"></div>
            </div>
            <span className="text-xs font-semibold text-slate-400 ml-auto italic">Aperçu LMS</span>
          </div>
          <div className="p-8 flex-1 overflow-y-auto prose prose-slate max-w-none">
            {/* Using dangerouslySetInnerHTML to simulate actual HTML rendering */}
            <div dangerouslySetInnerHTML={{ __html: code }} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex gap-2">
          {HTML_LESSONS.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all ${i === currentStep ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-6 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-colors"
          >
            Précédent
          </button>
          <button 
            onClick={handleNext}
            disabled={currentStep === HTML_LESSONS.length - 1}
            className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-30 transition-all shadow-lg shadow-blue-200"
          >
            {currentStep === HTML_LESSONS.length - 1 ? "Formation terminée !" : "Leçon suivante"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HTMLTraining;
