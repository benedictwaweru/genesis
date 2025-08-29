'use client';

import { useId } from 'react';

import { useTheme } from '@/hooks/useTheme';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Switch } from '@/components/ui/switch';

export function DarkLightSwitch1() {
  const id = useId();
  const { theme, setTheme } = useTheme();

  const isLight = theme === 'light';

  return (
    <div className="group inline-flex items-center gap-2">
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
      >
        <MoonIcon size={16} aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={isLight}
        onCheckedChange={(checked) => setTheme(checked ? 'light' : 'dark')}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
      >
        <SunIcon size={16} aria-hidden="true" />
      </span>
    </div>
  );
}

export function DarkLightSwitch() {
  const id = useId();
  const { theme, setTheme } = useTheme();

  const isLight = theme === 'light';

  return (
    <div>
      <div className="relative inline-grid h-6 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id={id}
          checked={isLight}
          onCheckedChange={(checked) => setTheme(checked ? 'light' : 'dark')}
          className="peer data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
        />
        <span className="pointer-events-none relative ms-0.5 flex min-w-6 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full peer-data-[state=unchecked]:rtl:-translate-x-full">
          <MoonIcon size={16} aria-hidden="true" />
        </span>
        <span className="peer-data-[state=checked]:text-background pointer-events-none relative me-0.5 flex min-w-6 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full">
          <SunIcon size={16} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
