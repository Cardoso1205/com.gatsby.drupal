import type { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const meta: Meta<typeof Footer> = {
  title: "components/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterComponent: Story = {
  args: {
    sliceContext: {
      navigation: [
        {
          title: "Company",
          links: [
            {
              to: "/",
              label: "About",
            },
            {
              to: "/",
              label: "Jobs",
            },
            {
              to: "/",
              label: "Newsroom",
            },
            {
              to: "/",
              label: "Advertisign",
            },
            {
              to: "/",
              label: "Contact us",
            },
          ],
        },
        {
          title: "Company",
          links: [
            {
              to: "/",
              label: "About",
            },
            {
              to: "/",
              label: "Jobs",
            },
            {
              to: "/",
              label: "Newsroom",
            },
            {
              to: "/",
              label: "Advertisign",
            },
            {
              to: "/",
              label: "Contact us",
            },
          ],
        },
        {
          title: "Company",
          links: [
            {
              to: "/",
              label: "About",
            },
            {
              to: "/",
              label: "Jobs",
            },
            {
              to: "/",
              label: "Newsroom",
            },
            {
              to: "/",
              label: "Advertisign",
            },
            {
              to: "/",
              label: "Contact us",
            },
          ],
        },
        {
          title: "Company",
          links: [
            {
              to: "/",
              label: "About",
            },
            {
              to: "/",
              label: "Jobs",
            },
            {
              to: "/",
              label: "Newsroom",
            },
            {
              to: "/",
              label: "Advertisign",
            },
            {
              to: "/",
              label: "Contact us",
            },
          ],
        },
      ],
    },
  },
};
