import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getDaysLeft = (deadline: string) => {
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const diffTime = deadlineDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? `${diffDays}d` : "Expired";
};


interface FormatOptions {
  decimalPlaces?: number;
  fixed?: number;
}

export function formatLargeNumber(value: number | bigint, options: FormatOptions = {}): string {
  const { decimalPlaces = 1, fixed = 4 } = options;

  const thresholds = [
    { limit: 1_000_000_000, suffix: 'B' },
    { limit: 1_000_000, suffix: 'M' },
    { limit: 1_000, suffix: 'K' },
  ];

  const num = typeof value === 'bigint' ? Number(value) : value;

  if (Math.abs(num) < 1_000) {
    return num.toLocaleString('en-US', { maximumFractionDigits: fixed, minimumFractionDigits: 0 });
  }

  for (const { limit, suffix } of thresholds) {
    if (Math.abs(num) >= limit) {
      const formatted = (num / limit).toFixed(decimalPlaces).replace(/\.0$/, '');
      return `${formatted}${suffix}`;
    }
  }

  return num.toString();
}

const MS_PER_MINUTE: number = 60 * 1000; 
const MS_PER_HOUR: number = 60 * MS_PER_MINUTE; 
const MS_PER_DAY: number = 24 * MS_PER_HOUR;

export function getTimeRemaining(deadlineInput: Date | string): string {
  const deadline: Date = typeof deadlineInput === 'string' ? new Date(deadlineInput) : deadlineInput;

  const now: Date = new Date();

  const diffMs: number = deadline.getTime() - now.getTime();

  if (diffMs <= 0) {
    return "0:0h:0m";
  }

  const days: number = Math.floor(diffMs / MS_PER_DAY);

  const remainingAfterDays: number = diffMs % MS_PER_DAY;
  const hours: number = Math.floor(remainingAfterDays / MS_PER_HOUR);
  const remainingAfterHours: number = remainingAfterDays % MS_PER_HOUR;
  const minutes: number = Math.floor(remainingAfterHours / MS_PER_MINUTE);

  return `${days}:${hours}h:${minutes}m`;
}