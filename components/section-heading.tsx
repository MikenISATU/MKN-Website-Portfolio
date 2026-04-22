import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: Props) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="section-title">{eyebrow}</p>
      <h2 className="mt-4 big-title">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-neutral-300">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
