
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">{title}</h2>
    {subtitle && <p className="mt-2 text-zinc-500 max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-12 bg-zinc-900 mt-4 rounded-full"></div>
  </div>
);
