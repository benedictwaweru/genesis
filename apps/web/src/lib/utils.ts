import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  locales: Intl.LocalesArgument,
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
) {
  return new Intl.RelativeTimeFormat(locales, { style: 'short' }).format(
    value,
    unit,
  );
}

export function formatCount(count: number) {
  const suffixes = [
    { threshold: 1e15, suffix: 'Q' },
    { threshold: 1e12, suffix: 'T' },
    { threshold: 1e9, suffix: 'B' },
    { threshold: 1e6, suffix: 'M' },
    { threshold: 1e3, suffix: 'K' },
  ];

  for (const { threshold, suffix } of suffixes) {
    if (count >= threshold) {
      const formatted = (count / threshold).toFixed(2);
      return formatted.replace(/\.?0+$/, '') + suffix;
    }
  }

  return count.toString();
}

export function formatCurrency(
  locales: Intl.LocalesArgument = navigator.language,
  currency: string,
  value: number,
) {
  if (value < 100000) {
    return new Intl.NumberFormat(locales, {
      style: 'currency',
      currency: currency,
    }).format(value);
  }

  const currencySymbol =
    new Intl.NumberFormat(locales, {
      style: 'currency',
      currency,
      currencyDisplay: 'narrowSymbol', // "$" instead of "USD"
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .formatToParts(0)
      .find((p) => p.type === 'currency')?.value ?? '';

  return `${currencySymbol} ${formatCount(value)}`;
}

export function slugify(sentence: string) {
  return sentence
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
