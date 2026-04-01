import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { usePhone } from '@os/phone/hooks/usePhone';
import { ChevronLeft, Circle, LayoutGrid } from 'lucide-react';

export const Navigation: React.FC = () => {
  const history = useHistory();
  const { isExact } = useRouteMatch('/');
  const { closePhone } = usePhone();

  const handleGoBackInHistory = () => {
    history.goBack();
  };

  const handleGoToMenu = () => {
    if (isExact) return;
    history.push('/');
  };

  return (
    <div className="w-full h-14 px-3 border-t border-[#2c3445] bg-[#161b24]">
      <div className="grid grid-cols-3 gap-2 h-full items-center">
        <button
          type="button"
          onClick={handleGoToMenu}
          className="h-9 border border-[#2c3445] bg-[#202633] text-[#f5f7fa] flex items-center justify-center"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={closePhone}
          className="h-9 border border-[#2c3445] bg-[#202633] text-[#f5f7fa] flex items-center justify-center"
        >
          <Circle className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={handleGoBackInHistory}
          className="h-9 border border-[#2c3445] bg-[#202633] text-[#f5f7fa] flex items-center justify-center"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
