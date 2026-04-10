import React, { useState, useRef } from 'react';
import { substanceDatabase, lookupSubstance } from '../data/substanceDatabase';

interface SubstanceTooltipProps {
  ingredientName: string;
  children: React.ReactNode;
}

export default function SubstanceTooltip({ ingredientName, children }: SubstanceTooltipProps) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('above');
  const ref = useRef<HTMLDivElement>(null);

  const info = lookupSubstance(ingredientName);
  if (!info) return <>{children}</>;

  const handleEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition(rect.top < 120 ? 'below' : 'above');
    }
    setShow(true);
  };

  return (
    <div
      ref={ref}
      className="relative inline-block w-full"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={`absolute left-0 z-50 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl max-w-[260px] pointer-events-none ${
            position === 'above' ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}
        >
          <p className="font-semibold text-amber-300">{info.name}</p>
          {info.category && <p className="text-gray-400 text-[10px]">{info.category}</p>}
          <p className="mt-0.5 leading-snug">{info.summary}</p>
        </div>
      )}
    </div>
  );
}
