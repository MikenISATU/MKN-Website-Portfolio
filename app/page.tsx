'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bot,
  Briefcase,
  CalendarDays,
  CircleDashed,
  Code2,
  Cpu,
  Mail,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Layers3,
  Linkedin,
  Mic2,
  Network,
  Palette,
  Rocket,
  Sparkle,
  ShieldCheck,
  Sparkles,
  UserRound,
  Workflow,
} from 'lucide-react';
import {
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRailway,
  SiReact,
  SiShopify,
  SiSolidity,
  SiSupabase,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbApi, TbBrandTelegram, TbBrandVscode, TbDatabase } from 'react-icons/tb';
import { FaPaintBrush } from 'react-icons/fa';
import { ExperienceCard } from '@/components/experience-card';
import { Navbar } from '@/components/navbar';
import { SectionHeading } from '@/components/section-heading';
import { SkillChip } from '@/components/skill-chip';

type ProjectLink = {
  name: string;
  url?: string;
  image: string;
  description: string;
  stack: string;
};

type BannerItem = {
  title: string;
  image: string;
  subtitle: string;
};

type SkillItem = {
  name: string;
  icon: ReactNode;
};

type ActionLinkProps = {
  href?: string;
  label: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
};

type HeroCard = {
  title: string;
  text: string;
  icon: typeof Code2;
  accent: string;
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const externalLinks = {
  calendly: 'https://calendly.com/napilanmileskenneth/quick-intro-call',
  presentation: 'https://www.canva.com/design/DAGUw3-sgUA/VOkE-LFqEVT7Z6Uxv7m1Yg/edit',
  github: 'https://github.com/MikenISATU',
  linkedin: 'https://www.linkedin.com/in/miles-kenneth-napilan-62b1a31b8/',
  previousPortfolio: 'https://miken.vercel.app/',
};

const mediaLinks = {
  profileImage: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776960514/496505609_9751579841628129_665665086682227040_n_jmywls.jpg',
};

const stats = [
  { value: '90+', label: 'Students reached in the ISATU session' },
  { value: '5+ years', label: 'Hands-on exposure to Web3 work' },
  { value: '3+', label: 'Telegram bots and utility automations shipped' },
  { value: 'Multi-role', label: 'Developer, operator, and outreach contributor' },
];

const featuredProjects = [
  {
    name: 'DocuChain Concept',
    category: 'Next.js - Web3 - Access Control',
    description:
      'A concept system for encrypted PDF handling, wallet checks, and gated access flows.',
  },
  {
    name: 'Telegram Utility Bots',
    category: 'Python - Automation - Bots',
    description:
      'Custom Telegram automations for blockchain tracking, alerts, workflow support, and operational tooling.',
  },
  {
    name: 'Startup Backend Systems',
    category: 'Node.js - APIs - Databases',
    description:
      'Backend architecture, API integration, and internal operations tooling for startup teams moving quickly.',
  },
];

const deployedWebsites: ProjectLink[] = [
  {
    name: 'Pattex',
    url: 'https://pattex-zcqu.vercel.app/',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575010/pattex_sgwuau.jpg',
    stack: 'Next.js - UI/UX - Startup Site',
    description:
      'A commissioned startup website with modern presentation, clear user flow, and a custom frontend build.',
  },
  {
    name: 'Digitization Project Report CSC RO6',
    url: 'https://cscr06dpr.vercel.app/',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575010/csc_o8qfkw.jpg',
    stack: 'Next.js - Supabase - Vercel',
    description:
      'A reporting-focused website built for a government-oriented use case with structured data and deployment support.',
  },
  {
    name: 'Moose Haven',
    url: 'https://moose-haven.vercel.app/',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575010/Capture_gotovm.jpg',
    stack: 'Creative Website',
    description:
      'A character-driven creative build with playful visual presentation and lightweight front-end execution.',
  },
];

const bannerItems: BannerItem[] = [
  {
    title: 'Twitter Banner Sample 01',
    subtitle: '',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575299/bruce_v4ypbh.png',
  },
  {
    title: 'Twitter Banner Sample 02',
    subtitle: '',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575265/s3_trbhl3.png',
  },
  {
    title: 'Twitter Banner Sample 03',
    subtitle: '',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575262/TIO_WITH_COMMISSION_1_sathj4.jpg',
  },
  {
    title: 'Twitter Banner Sample 04',
    subtitle: '',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575255/FF_klncgv.png',
  },
  {
    title: 'Twitter Banner Sample 05',
    subtitle: '',
    image: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776575227/2_yzu4y8.png',
  },
];

const services = [
  'Modern full-stack website development',
  'Telegram bot development and automation',
  'Web3 integration and technical support',
  'API, backend, and database architecture',
  'Startup support, systems, and execution',
  'Landing pages and polished portfolio builds',
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Curriculum Contributor',
    text: 'Invited to contribute feedback for the BSCS 2026 curriculum review.',
  },
  {
    icon: Mic2,
    title: 'Campus Speaker',
    text: 'Presented Blockchain Enterprise and Supply Chain to more than 90 students at ISATU.',
  },
  {
    icon: Layers3,
    title: 'Cross-Functional',
    text: 'Comfortable across engineering, design awareness, outreach, and delivery.',
  },
  {
    icon: Rocket,
    title: 'Startup Ready',
    text: 'Able to contribute inside fast-moving teams where clarity and follow-through matter.',
  },
];

const certifications = [
  'HACKFORGOV 2023 - Department of Information and Communications Technology',
  'Philippine Startup Challenge 8 2023 - Department of Information and Communications Technology',
  'Starlink BridgeTech Hackathon 2023 - Brainsparks Philippines',
  'Principles of Web Development and Introduction to HTML 2024 - DICT',
  'Fundamentals of Marketing 2024 - DICT',
  'Principles of Design 2024 - DICT',
  'Digital Innovation in Government 2024 - DICT',
  'Introduction to Data Privacy 2024 - DICT',
];

const skills: SkillItem[] = [
  { name: 'Next.js', icon: <SiNextdotjs className="h-4 w-4" /> },
  { name: 'React', icon: <SiReact className="h-4 w-4" /> },
  { name: 'TypeScript', icon: <SiTypescript className="h-4 w-4" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="h-4 w-4" /> },
  { name: 'Python', icon: <SiPython className="h-4 w-4" /> },
  { name: 'JavaScript', icon: <SiJavascript className="h-4 w-4" /> },
  { name: 'Supabase', icon: <SiSupabase className="h-4 w-4" /> },
  { name: 'Firebase', icon: <SiFirebase className="h-4 w-4" /> },
  { name: 'MySQL', icon: <SiMysql className="h-4 w-4" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="h-4 w-4" /> },
  { name: 'Flutter', icon: <SiFlutter className="h-4 w-4" /> },
  { name: 'Web3', icon: <SiSolidity className="h-4 w-4" /> },
  { name: 'Smart Contracts', icon: <SiSolidity className="h-4 w-4" /> },
  { name: 'Telegram Bots', icon: <TbBrandTelegram className="h-4 w-4" /> },
  { name: 'API Integration', icon: <TbApi className="h-4 w-4" /> },
  { name: 'Vercel', icon: <SiVercel className="h-4 w-4" /> },
  { name: 'Railway', icon: <SiRailway className="h-4 w-4" /> },
  { name: 'Shopify Liquid', icon: <SiShopify className="h-4 w-4" /> },
  { name: 'Graphic Design', icon: <FaPaintBrush className="h-4 w-4" /> },
  { name: 'Business Development', icon: <Briefcase className="h-4 w-4" /> },
  { name: 'Git', icon: <SiGit className="h-4 w-4" /> },
  { name: 'GitHub', icon: <SiGithub className="h-4 w-4" /> },
  { name: 'Database Design', icon: <TbDatabase className="h-4 w-4" /> },
  { name: 'Developer Tools', icon: <TbBrandVscode className="h-4 w-4" /> },
];

const experience = [
  {
    role: 'Business Development Specialist',
    company: 'Attention Company',
    period: 'Dec 2025 - Present',
    points: [
      'Lead outreach to public companies and Web2 AI firms.',
      'Maintain pipeline visibility and reporting workflows.',
      'Coordinate follow-ups with strong execution and organization.',
    ],
  },
  {
    role: 'Outreach Specialist',
    company: 'IBC Group',
    period: 'Sep 2025 - Present',
    points: [
      'Supported management across departments in a blockchain consulting environment.',
      'Handled large-scale datasets for validation and research workflows.',
    ],
  },
  {
    role: 'Backend / Systems Contributor',
    company: 'PARA Startup',
    period: 'Jun 2025 - Present',
    points: [
      'Built backend systems, database architecture, and API integrations.',
      'Contributed to a project that secured funding support.',
    ],
  },
  {
    role: 'Core Team Member',
    company: 'MicroPets',
    period: '2023 - Present',
    points: [
      'Managed Telegram and Discord communities.',
      'Developed Telegram bots in Python and real-time tracking tools.',
      'Supported marketing, partnerships, and technical execution.',
    ],
  },
];

const heroCards: HeroCard[] = [
  {
    title: 'Full-stack systems',
    text: 'Clean frontend execution with practical backend thinking.',
    icon: Code2,
    accent: 'from-cyan-400/15 via-cyan-300/6 to-transparent',
  },
  {
    title: 'Web3 and automation',
    text: 'Utility-driven builds for workflows, bots, and ecosystem support.',
    icon: Bot,
    accent: 'from-sky-400/15 via-cyan-300/6 to-transparent',
  },
  {
    title: 'Delivery and support',
    text: 'Professional output shaped for real projects, not just demos.',
    icon: ShieldCheck,
    accent: 'from-indigo-400/15 via-cyan-300/6 to-transparent',
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ActionLink({ href, label, icon, variant = 'secondary', external = false }: ActionLinkProps) {
  const classes = {
    primary:
      'bg-white text-black hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(255,255,255,0.14)]',
    secondary:
      'border border-white/10 bg-white/5 text-white hover:-translate-y-1 hover:bg-white/10',
    ghost:
      'border border-brand-300/25 bg-brand-400/10 text-brand-200 hover:-translate-y-1 hover:bg-brand-400/20',
  };

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium opacity-75 ${classes[variant]}`}
      >
        {label}
        {icon}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition duration-300 ${classes[variant]}`}
    >
      {label}
      {icon}
    </a>
  );
}

function MediaFrame({
  src,
  alt,
  ratio,
  label,
}: {
  src: string;
  alt: string;
  ratio: string;
  label: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex ${ratio} items-center justify-center rounded-[24px] border border-dashed border-white/15 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 text-center`}
      >
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Add Asset</p>
          <p className="mt-3 text-lg font-semibold text-white">{label}</p>
          <p className="mt-2 text-sm leading-6 text-neutral-400">
            This image will appear automatically once you add the file to the matching public path.
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`${ratio} w-full rounded-[24px] object-cover object-top`}
    />
  );
}

function HeroFeaturePanel({
  icon: Icon,
  title,
  text,
  accent,
}: {
  icon: typeof Code2;
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <article className="glass-card card-hover relative overflow-hidden p-5">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent}`} />
      <div className="flex items-center gap-4">
        <motion.div
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[22px] border border-white/10 bg-black/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[9px] rounded-[16px] border border-cyan-300/15"
          />
          <Icon size={28} className="relative z-10 text-cyan-300" />
        </motion.div>
        <div className="relative">
          <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-300">{text}</p>
        </div>
      </div>
    </article>
  );
}

function SectionMotionBadge({
  icon: Icon,
  label,
}: {
  icon: typeof Code2;
  label: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      className="mt-8 inline-flex items-center gap-4 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))] p-4 backdrop-blur-xl"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/10 bg-black/20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[8px] rounded-[14px] border border-cyan-300/15"
        />
        <motion.div
          animate={{ scale: [0.94, 1.06, 0.94], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[14px] rounded-[12px] bg-cyan-300/5"
        />
        <Icon size={22} className="relative z-10 text-cyan-300" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Focused Learning</p>
        <p className="mt-2 text-sm leading-6 text-neutral-300">{label}</p>
      </div>
    </motion.div>
  );
}

function FloatingIconCluster({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Array<{
    icon: typeof Code2;
    label: string;
    delay: number;
    position: string;
  }>;
}) {
  return (
    <div className="relative mt-8 min-h-[280px] overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.10),transparent_26%)]" />
      <div className="relative z-10 max-w-sm">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{title}</p>
        <p className="mt-3 text-sm leading-7 text-neutral-300">{description}</p>
      </div>

      <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.04, 1],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay,
              }}
              className="flex min-h-[72px] items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-300">
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium text-white/90">{item.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SplashLoader({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-neutral-950"
        >
          <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-[0.05]" />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 26, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute left-[14%] top-[18%] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -18, 0], y: [0, 24, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
          />

          <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-cyan-300/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[10px] rounded-full border border-white/10"
              />
              <motion.div
                animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-semibold tracking-[0.3em] text-cyan-200"
              >
                MKN
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="mt-8 text-3xl font-semibold tracking-tight text-white"
            >
              Loading portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
              className="mt-3 max-w-sm text-sm leading-7 text-neutral-300"
            >
              Preparing a polished view of projects, experience, and technical work.
            </motion.p>

            <div className="mt-6 flex items-center gap-2">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35] }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: dot * 0.16,
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-cyan-300"
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function BannerCarousel({ items }: { items: BannerItem[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.title} className="w-full shrink-0">
            <div className="glass-card mx-auto max-w-5xl p-4 sm:p-5">
              <MediaFrame
                src={item.image}
                alt={item.title}
                ratio="aspect-[3/1]"
                label={item.title}
              />
              <div className="px-1 pb-2 pt-5">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
                {item.subtitle ? (
                  <p className="mt-2 text-sm leading-6 text-neutral-300 sm:text-base">
                    {item.subtitle}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((item, dotIndex) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to ${item.title}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              dotIndex === index ? 'w-8 bg-brand-300' : 'w-2.5 bg-white/20 hover:bg-white/35'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectLink }) {
  return (
    <article className="glass-card card-hover overflow-hidden">
      <div className="p-4">
        <MediaFrame
          src={project.image}
          alt={project.name}
          ratio="aspect-[16/10]"
          label={`${project.name} preview`}
        />
      </div>
      <div className="border-t border-white/10 p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-brand-300">{project.stack}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
        <p className="mt-4 leading-7 text-neutral-300">{project.description}</p>
        <div className="mt-5">
          <ActionLink
            href={project.url}
            label={project.url ? 'Open project' : 'Project link to be added'}
            icon={<ExternalLink size={16} />}
            variant="ghost"
            external
          />
        </div>
      </div>
    </article>
  );
}

function HighlightCard({
  icon,
  title,
  text,
}: {
  icon: typeof GraduationCap;
  title: string;
  text: string;
}) {
  const Icon = icon;

  return (
    <article className="glass-card card-hover h-full p-6">
      <div className="inline-flex rounded-2xl border border-brand-300/20 bg-brand-400/10 p-3 text-brand-200">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-neutral-300">{text}</p>
    </article>
  );
}

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-hidden bg-neutral-950 text-white">
      <SplashLoader isVisible={showSplash} />
      <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-[0.05]" />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.04, scale: 1 }}
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.015, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 ambient-grid mesh-overlay"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 26, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-12%] top-0 h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -22, 0],
          y: [0, 28, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[-8%] top-[18%] h-[340px] w-[340px] rounded-full bg-indigo-500/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 18, 0],
          y: [0, -18, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-[8%] left-[18%] h-[280px] w-[280px] rounded-full bg-sky-300/5 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-1/2 top-[120px] h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-white/[0.05]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute right-[10%] top-[420px] h-[280px] w-[280px] rounded-full border border-cyan-300/[0.08]"
      />

      <Navbar items={navItems} ctaHref="#contact" />

      <section id="top" className="relative border-b border-white/5">
        <div className="section-shell section-spacing relative">
          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center xl:gap-14 2xl:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-300/20 bg-brand-400/10 px-4 py-2 text-sm text-brand-200">
                  <Sparkles size={16} />
                  Full-stack builder with Web3 and operations experience
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Building polished websites, practical systems, and high-trust technical work.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  I am Miles Kenneth Napilan, a full-stack developer and Web3 contributor focused on
                  clean builds, clear communication, and execution that feels professional from first
                  impression to final delivery.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ActionLink
                    href={externalLinks.calendly}
                    label="Book a quick intro call"
                    icon={<CalendarDays size={18} />}
                    variant="primary"
                    external
                  />
                  <ActionLink
                    href="#projects"
                    label="Explore selected work"
                    icon={<ArrowRight size={18} />}
                    variant="secondary"
                  />
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-8 flex flex-col gap-3 text-sm text-neutral-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                  <div className="inline-flex items-center gap-2">
                    <UserRound size={16} className="text-brand-300" />
                    Open for Dev Works.
                  </div>
                  <ActionLink
                    href={externalLinks.presentation}
                    label="View Canva presentation"
                    icon={<Palette size={16} />}
                    variant="ghost"
                    external
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="glass-card relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_40%)]" />
                <div className="relative">
                  <div className="grid gap-4">
                    {heroCards.map((card, index) => (
                      <Reveal key={card.title} delay={index * 80}>
                        <HeroFeaturePanel
                          icon={card.icon}
                          title={card.title}
                          text={card.text}
                          accent={card.accent}
                        />
                      </Reveal>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {stats.map((item, index) => (
                      <Reveal key={item.label} delay={index * 90}>
                        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                          <p className="text-2xl font-semibold text-white">{item.value}</p>
                          <p className="mt-2 text-sm leading-6 text-neutral-300">{item.label}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="introduction" className="section-spacing">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
            <Reveal>
              <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4">
                <div className="absolute inset-x-12 top-0 h-24 rounded-full bg-brand-300/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
                  <img
                    src={mediaLinks.profileImage}
                    alt="Miles Kenneth Napilan"
                    className="aspect-square w-full object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass-card p-8 sm:p-10">
                <p className="eyebrow">Introduction</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
                  Miles Kenneth Napilan
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                  I build modern websites, useful systems, and technical workflows that are meant
                  to feel polished, clear, and dependable. My work combines full-stack development,
                  Web3 support, automation, and practical execution for teams that need more than
                  just code.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    'Full-stack development with a clean visual finish',
                    'Automation, bots, and systems that solve real workflow needs',
                    'Web3 familiarity combined with practical execution',
                    'Communication and delivery shaped for clients, startups, and teams',
                  ].map((item, index) => (
                    <Reveal key={item} delay={index * 70}>
                      <div className="flex h-full rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="flex items-start gap-3">
                          <BadgeCheck size={18} className="mt-0.5 text-brand-300" />
                          <span className="text-sm leading-6 text-neutral-200">{item}</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="section-spacing">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="Professional work shaped by both technical depth and practical follow-through."
                description="I work across software development, Web3 systems, automation, partnerships, and technical support. My focus is not just shipping code, but helping projects feel organized, credible, and ready for real use."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="glass-card p-8 sm:p-10">
                <p className="text-lg leading-8 text-neutral-300">
                  Beyond writing code, I also enjoy turning technical ideas into something presentable,
                  understandable, and useful. That mix of engineering, communication, and delivery is
                  what shapes my work style.
                </p>
                <div className="mt-8 grid gap-4 sm:auto-rows-fr sm:grid-cols-2">
                  {[
                    'Strong front-end polish with responsive implementation',
                    'Backend systems and integration thinking',
                    'Design-aware presentation and visual cleanup',
                    'Reliable support for fast-moving teams and founders',
                  ].map((item, index) => (
                    <Reveal key={item} delay={index * 70}>
                      <div className="flex h-full rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="flex items-start gap-3">
                          <BadgeCheck size={18} className="mt-0.5 text-brand-300" />
                          <span className="text-sm leading-6 text-neutral-200">{item}</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="highlights" className="section-spacing">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Highlights"
              title="A profile that blends engineering, communication, and execution."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <HighlightCard icon={item.icon} title={item.title} text={item.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-spacing">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Work"
              title="Selected systems and project directions."
              description="A concise snapshot of the kinds of technical work I contribute to, from automation to backend architecture and Web3 workflows."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.name} delay={index * 90}>
                <article className="glass-card card-hover h-full p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-brand-300">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-4 leading-7 text-neutral-300">{project.description}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                    <span>Project direction</span>
                    <ArrowRight size={16} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="websites" className="section-spacing">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Deployed Websites"
              title="Production-style presentation with graceful asset fallbacks."
              description="When you add your screenshots to the matching public folder paths, these cards will automatically display them without further code changes."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {deployedWebsites.map((project, index) => (
              <Reveal key={project.name} delay={index * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="banners" className="section-spacing">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Banner Work"
              title="A clean, centered showcase that stays smooth on mobile."
              description="The carousel keeps your presentation polished even before the real assets are dropped in."
              align="center"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10">
              <BannerCarousel items={bannerItems} />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="section-spacing">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Hands-on roles across startups, Web3, outreach, and development."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.role}`} delay={index * 90}>
                <ExperienceCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-spacing">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Certifications"
                  title="Hackathons, government programs, and technical learning."
                  description="A mix of software, design, innovation, marketing, and privacy-related learning tracks."
                />
                <SectionMotionBadge
                  icon={CircleDashed}
                  label="Continuous technical exploration through competitions, programs, and structured learning."
                />
                <FloatingIconCluster
                  title="Learning Tracks"
                  description="A visual snapshot of the different areas these certifications support."
                  items={[
                    {
                      icon: Award,
                      label: 'Hackathons',
                      delay: 0,
                      position: '',
                    },
                    {
                      icon: ShieldCheck,
                      label: 'Privacy',
                      delay: 0.3,
                      position: '',
                    },
                    {
                      icon: Sparkles,
                      label: 'Innovation',
                      delay: 0.15,
                      position: '',
                    },
                    {
                      icon: Briefcase,
                      label: 'Marketing',
                      delay: 0.45,
                      position: '',
                    },
                  ]}
                />
              </div>
            </Reveal>

            <div className="grid gap-4">
              {certifications.map((item, index) => (
                <Reveal key={item} delay={index * 60}>
                  <div className="glass-card card-hover p-5">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex rounded-2xl border border-brand-300/20 bg-brand-400/10 p-3 text-brand-200">
                        <Award size={20} />
                      </div>
                      <p className="leading-7 text-neutral-200">{item}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-spacing">
        <div className="section-shell">
          <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Skills and Services"
                  title="Built with modern tools and organized delivery."
                />
                <FloatingIconCluster
                  title="Core Strengths"
                  description="An active mix of frontend polish, systems thinking, automation, and production-minded execution."
                  items={[
                    {
                      icon: Code2,
                      label: 'Frontend',
                      delay: 0,
                      position: '',
                    },
                    {
                      icon: Workflow,
                      label: 'Automation',
                      delay: 0.28,
                      position: '',
                    },
                    {
                      icon: Cpu,
                      label: 'Backend',
                      delay: 0.12,
                      position: '',
                    },
                    {
                      icon: Network,
                      label: 'Integrations',
                      delay: 0.4,
                      position: '',
                    },
                    {
                      icon: Sparkle,
                      label: 'Polish',
                      delay: 0.22,
                      position: '',
                    },
                  ]}
                />
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={80}>
                <div className="glass-card p-6">
                  <p className="eyebrow">Tech Stack</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <Reveal key={skill.name} delay={index * 20}>
                        <SkillChip label={skill.name} icon={skill.icon} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="glass-card p-6">
                  <p className="eyebrow">What I Can Help With</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {services.map((service, index) => (
                      <Reveal key={service} delay={index * 50}>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <div className="flex items-start gap-3">
                            <BadgeCheck size={18} className="mt-0.5 text-brand-300" />
                            <span className="text-sm leading-6 text-neutral-200">{service}</span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="section-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(99,102,241,0.08),rgba(255,255,255,0.03))] p-8 backdrop-blur-2xl sm:p-10 xl:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="eyebrow">Contact</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl xl:text-5xl">
                    Let's build something practical, polished, and useful.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                    Open to full-stack work, Web3 projects, technical collaboration, startup support,
                    and systems that need reliable execution.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <ActionLink
                    href={externalLinks.calendly}
                    label="Book a call"
                    variant="primary"
                    external
                  />
                  <ActionLink
                    href={externalLinks.previousPortfolio}
                    label="View previous portfolio"
                    icon={<Globe size={18} />}
                    variant="secondary"
                    external
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="section-shell flex flex-col gap-6 py-8 text-sm text-neutral-400 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-medium text-neutral-200">Miles Kenneth Napilan</p>
            <p className="mt-1">Full-stack developer, Web3 contributor, and technical builder.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <ActionLink
              href={externalLinks.github}
              label="GitHub"
              icon={<Github size={16} />}
              variant="ghost"
              external
            />
            <ActionLink
              href={externalLinks.linkedin}
              label="LinkedIn"
              icon={<Linkedin size={16} />}
              variant="ghost"
              external
            />
            <ActionLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=napilanmileskenneth@gmail.com"
              label="Email"
              icon={<Mail size={16} />}
              variant="ghost"
              external
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
