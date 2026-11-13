'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const themes = [
  { key: 'system', icon: Monitor, label: 'Системная тема' },
  { key: 'light', icon: Sun, label: 'Светлая тема' },
  { key: 'dark', icon: Moon, label: 'Тёмная тема' },
] as const;

type ThemeKey = (typeof themes)[number]['key'];

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn('h-10 w-28', className)} aria-hidden="true" />;
  }

  return (
    <div
      className={cn(
        'relative isolate flex h-10 items-center rounded-full border border-border bg-background p-1',
        className,
      )}
      role="group"
      aria-label="Выбор темы"
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            key={key}
            type="button"
            aria-label={label}
            aria-pressed={isActive}
            onClick={() => setTheme(key)}
            className="relative flex size-8 items-center justify-center rounded-full hover:cursor-pointer"
          >
            {isActive && (
              <motion.span
                layoutId="active-theme"
                className="absolute inset-0 rounded-full bg-muted"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}

            <Icon
              className={cn(
                'relative z-10 size-5',
                isActive ? 'text-foreground' : 'text-muted-foreground',
              )}
              strokeWidth={1.2}
            />
          </button>
        );
      })}
    </div>
  );
}
