import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a12] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400" />
            <span className="text-sm font-semibold tracking-wide">AuraBoard</span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Twitter" className="transition hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="transition hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="transition hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/60 sm:text-left">
          © {new Date().getFullYear()} AuraBoard, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
