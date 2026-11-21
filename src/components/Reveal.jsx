import { useRef } from 'react';
import { useReveal } from '../lib/motion';

export const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null);

  useReveal(ref, { delay, direction });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
