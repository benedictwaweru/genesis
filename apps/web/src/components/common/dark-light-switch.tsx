'use client';

import { useId } from 'react';

import { useTheme } from '@/hooks/useTheme';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Switch } from '@/components/ui/switch';

export function DarkLightSwitch() {
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
