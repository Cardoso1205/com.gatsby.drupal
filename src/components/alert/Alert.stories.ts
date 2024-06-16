import type { Meta, StoryObj } from "@storybook/react";

import Alert from ".";

const meta: Meta<typeof Alert> = {
  title: "components/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AlertComponent: Story = {
  args: {
    text: 'Check the latest COVID-19 restrictions before you travel.',
    cta: {
      label: 'Learn more',
      to: ''
    }
  },
};
