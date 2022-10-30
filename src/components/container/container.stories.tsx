import { ComponentStory, ComponentMeta } from '@storybook/react';

import { COMPONENT_LABEL } from '../../stories/utils';
import { Container } from './container';

export default {
  title: `${COMPONENT_LABEL}/Container`,
  component: Container,
} as ComponentMeta<typeof Container>;

export const ContainerComponent: ComponentStory<typeof Container> = () => (
  <Container className="border border-black min-h-half-screen text-center flex justify-center items-center">
    This content is inside a `Container` component
  </Container>
);
