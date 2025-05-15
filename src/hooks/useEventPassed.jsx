import { isEventPassed } from '@/utils/app.util';
import { useState, useEffect } from 'react';

const useEventPassed = () => {
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    setIsPassed(isEventPassed());
  }, []);

  return isPassed;
};

export default useEventPassed;