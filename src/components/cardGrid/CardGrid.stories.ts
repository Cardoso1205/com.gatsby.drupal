import type { Meta, StoryObj } from "@storybook/react";
import CardGrid from ".";
import australia from "./img/australia.png";

const meta: Meta<typeof CardGrid> = {
  title: "components/CardGrid",
  component: CardGrid,
};

export default meta;
type Story = StoryObj<typeof CardGrid>;

export const CardGridComponent: Story = {
  args: {
    title: "Enjoy your dream vacation",
    description:
      "Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us",
    columns: "4",
    cards: [
      {
        image: australia,
        title: "Australia",
        description: "2246 properties",
      },
      {
        image: australia,
        title: "Australia",
        description: "2246 properties",
      },
      {
        image: australia,
        title: "Australia",
        description: "2246 properties",
      },
      {
        image: australia,
        title: "Australia",
        description: "2246 properties",
      },
    ],
  },
};
