'use client';

import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme/theme-provider';
import { useId } from 'react';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const id = useId();

  return (
    <button
      id={id}
      aria-label="Toggle theme"
      role="switch"
      aria-checked={theme === 'dark'}
      onClick={toggle}
      className={cn(
        'inline-flex h-9 w-[72px] items-center rounded-full border border-border/50 bg-card p-1 text-foreground shadow-sm transition-colors',
        'data-[pressed=true]:bg-muted',
        className,
      )}
      data-pressed={theme === 'dark'}
    >
      <span
        className={cn(
          'grid h-7 w-7 place-items-center rounded-full transition-all',
          theme === 'dark'
            ? 'translate-x-8 bg-primary text-primary-foreground'
            : 'translate-x-0 bg-muted text-muted-foreground',
        )}
      >
        {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
      {/* icons backdrop */}
      {theme === 'dark' && (
        <span className="pointer-events-none absolute ml-2 text-muted-foreground">
          <Sun className="h-4 w-4" />
        </span>
      )}

      {theme === 'light' && (
        <span className="pointer-events-none absolute ml-[42px] text-muted-foreground">
          <Moon className="h-4 w-4" />
        </span>
      )}
    </button>
  );
}
