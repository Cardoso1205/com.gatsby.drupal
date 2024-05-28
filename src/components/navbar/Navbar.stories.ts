import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '.';

const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarComponent: Story = {
  args: {
    logo: "my Dream Place",
    links: [
      {
        label: "Home",
        to: "",
      },
      {
        label: "Discover",
        to: "",
      },
      {
        label: "Activities",
        to: "",
      },
      {
        label: "About",
        to: "",
      },
      {
        label: "Contact",
        to: "",
      },
    ],
    ctas: [
      {
        children: "Register",
        to: "",
        variant: "secondary",
      },
      {
        children: "Sign In",
        to: "",
        variant: "primary"
      },
    ],
  },
};
