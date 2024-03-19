import React from 'react';

export const Loader = () => {
  return (
    <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-24 md:h-24 h-16 w-16 aspect-square rounded-full">
      <div className="rounded-full h-full w-full bg-slate-100 dark:bg-white background-blur-md"></div>
    </div>
  );
};
