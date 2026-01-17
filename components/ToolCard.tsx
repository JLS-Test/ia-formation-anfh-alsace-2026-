
import React from 'react';
import { ToolUseCase } from '../types';

interface ToolCardProps {
  tool: ToolUseCase;
  onSelect: (tool: ToolUseCase) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(tool)}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
        {tool.icon}
      </div>
      <div className="mb-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {tool.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{tool.title}</h3>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
        {tool.description}
      </p>
      <div className="pt-4 border-t border-slate-50 mt-auto">
        <p className="text-xs font-medium text-slate-500 italic">
          💡 {tool.practicalValue}
        </p>
      </div>
    </div>
  );
};

export default ToolCard;
