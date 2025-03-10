import { useState } from 'react';

const useDebounce = <T extends (args: unknown) => void>(
  callback: T,
  delay: number,
) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  return (args: unknown) => {
    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => callback(args), delay);
    setTimer(newTimer);
  };
};

export default useDebounce;
