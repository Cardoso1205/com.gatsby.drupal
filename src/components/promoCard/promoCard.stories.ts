import type { Meta, StoryObj } from '@storybook/react';
import PromoCard from '.';
import promoImage from "./promo-image.jpg"

const meta: Meta<typeof PromoCard> = {
  title: 'components/PromoCard',
  component: PromoCard,
};

export default meta;
type Story = StoryObj<typeof PromoCard>;

export const PromoCardComponent: Story = {
  args: {
    image: promoImage,
    title: 'Download the mobile application for bonus coupons and travel codes',
    cta: {
      to: '',
      label: 'Download mobile app'
    }
  },
};
