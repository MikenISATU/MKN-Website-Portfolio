'use client';

import { motion } from 'motion/react';

const dots = [0, 1, 2];

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-[0.05]" />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 24, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[12%] top-[18%] h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -18, 0],
          y: [0, 24, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[10%] top-[22%] h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative flex h-28 w-28 items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-cyan-300/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[10px] rounded-full border border-white/10"
          />
          <motion.div
            animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-semibold tracking-[0.3em] text-cyan-200"
          >
            MKN
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="mt-8 text-3xl font-semibold tracking-tight text-white"
        >
          Loading portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
          className="mt-3 max-w-sm text-sm leading-7 text-neutral-300"
        >
          Preparing a polished view of projects, experience, and technical work.
        </motion.p>

        <div className="mt-6 flex items-center gap-2">
          {dots.map((dot) => (
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
    </main>
  );
}
