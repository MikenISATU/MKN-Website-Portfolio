type ExperienceCardProps = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export function ExperienceCard({ role, company, period, points }: ExperienceCardProps) {
  return (
    <article className="glass-card h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/20 hover:bg-white/[0.07]">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <p className="mt-1 text-neutral-300">{company}</p>
        </div>
        <p className="rounded-full border border-brand-300/20 bg-brand-400/10 px-3 py-1 text-sm text-brand-200">
          {period}
        </p>
      </div>
      <ul className="mt-6 space-y-3 text-neutral-300">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-300" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
