import type { Meta, StoryObj } from '@storybook/react';
import PreFooter from '.';

const meta: Meta<typeof PreFooter> = {
  title: 'components/PreFooter',
  component: PreFooter,
};

export default meta;
type Story = StoryObj<typeof PreFooter>;

export const PreFooterComponent: Story = {
  args: {
    title: 'Explore the world with My Dream place',
    cta: {
      to: '/',
      label: 'Discover new places and experiences'
    }
  },
};
