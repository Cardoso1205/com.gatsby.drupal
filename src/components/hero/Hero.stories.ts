import type { Meta, StoryObj } from "@storybook/react";
import heroImage from "./hero-image.jpg";

import Hero from ".";

const meta: Meta<typeof Hero> = {
  title: "components/Hero",
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const HeroComponent: Story = {
  args: {
    title: "Enjoy Your Dream Vacation",
    description: `Plan and book our perfect trip with expert advice, travel tips,
    destination information and inspiration from us`,
    image: heroImage,
    fields: [
      { placeholder: "Where are you going?" },
      { placeholder: "Check in date" },
      { placeholder: "Check out date" },
      { placeholder: "Guests" },
    ],
    ctas: [{ children: "Search", to: "" }],
  },
};
