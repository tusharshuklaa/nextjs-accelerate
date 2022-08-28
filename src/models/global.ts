export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface ComponentWithClassname {
  className?: string;
}

export interface ComponentWithTestId {
  testId?: string;
}

export interface TestableComponent
  extends ComponentWithChildren,
    ComponentWithClassname,
    ComponentWithTestId {}
