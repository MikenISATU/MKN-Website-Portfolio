import type { ReactNode } from 'react';

type SkillChipProps = {
  label: string;
  icon?: ReactNode;
};

export function SkillChip({ label, icon }: SkillChipProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300/40 hover:bg-white/10 hover:text-white">
      {icon ? <span className="text-brand-300">{icon}</span> : null}
      {label}
    </span>
  );
}
