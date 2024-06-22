import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';
import australia from "./australia-1.jpg"

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const General: Story = {
  args: {
    image: australia,
    title: "Australia",
    description: "2246 properties"
  },
};

export const Blog: Story = {
  args: {
    image: australia,
    title: "Sydeny’s 10 most fashionable 5 star hotels",
    description: "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    variant: "blog"
  },
};
