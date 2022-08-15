import { FC } from 'react';

interface ContainerProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({
  testId = 'container',
  className = '',
  children,
}: ContainerProps) => (
  <section data-testid={testId} className={`max-w-6xl m-auto ${className}`}>
    {children}
  </section>
);
