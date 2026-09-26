import { ReactNode, useEffect, useRef, useState } from 'react';

const useFadeIn = (threshold = 0.1, delay = 0) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
};

type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeInSection({ children, delay = 0, className = '' }: FadeInSectionProps) {
  const { ref, isVisible } = useFadeIn(0.1, delay);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
