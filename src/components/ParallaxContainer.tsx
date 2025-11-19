import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export const ParallaxContainer = ({
  children,
  intensity = 20,
  className = '',
}: ParallaxContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xOffset = ((clientX - innerWidth / 2) / innerWidth) * intensity;
      const yOffset = ((clientY - innerHeight / 2) / innerHeight) * intensity;

      containerRef.current.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
};
