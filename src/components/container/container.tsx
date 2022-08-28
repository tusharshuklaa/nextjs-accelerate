import { FC } from 'react';
import { TestableComponent } from '../../models';

export const Container: FC<TestableComponent> = ({
  testId = 'container',
  className = '',
  children,
}) => (
  <section data-testid={testId} className={`max-w-6xl m-auto ${className}`}>
    {children}
  </section>
);
