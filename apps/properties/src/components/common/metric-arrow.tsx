import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';

interface MetricArrowProps {
  change: number;
}

export function MetricArrow({ change }: MetricArrowProps) {
  const isUp = change > 0;

  return (
    <Badge variant="outline">
      {isUp ? (
        <span className="text-green-600 text-xs">
          <IconTrendingUp />
        </span>
      ) : (
        <span className="text-red-600">
          <IconTrendingDown />
        </span>
      )}
      <span className={isUp ? 'text-green-600' : 'text-red-600'}>
        {isUp ? `+${change}%` : `-${change}%`}
      </span>
    </Badge>
  );
}
