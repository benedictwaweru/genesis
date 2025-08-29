import { useEffect } from 'react';

import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/logistics/')({
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/logistics/auth' });
  }, [navigate]);

  return null;
}
