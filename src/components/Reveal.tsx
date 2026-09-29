import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Direction an element travels from as it reveals. */
export type RevealDirection = 'left' | 'right' | 'up';

interface RevealProps {
  children: ReactNode;
  /** Side the card slides in from. Defaults to 'up'. */
  direction?: RevealDirection;
  /** Transition delay in ms, for stagger inside a section. */
  delay?: number;
  className?: string;
  as?: 'div' | 'article' | 'li' | 'section';
}

const DIRECTION_CLASS: Record<RevealDirection, string> = {
  left: 'reveal-left',
  right: 'reveal-right',
  up: 'reveal-up',
};

/** Slides content in from `direction` the first time it enters the viewport. */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${DIRECTION_CLASS[direction]}${visible ? ' is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
