import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    to: '',
    children: 'Sign In',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    children: 'Sign In',
  },
};
