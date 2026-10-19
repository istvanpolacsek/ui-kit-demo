import type { Meta, StoryObj } from "@storybook/react-vite";
import { PricingCard } from "./PricingCard";
const meta = {
  title: "Cards/Pricing Card",
  component: PricingCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PricingCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { device: "Desktop", variant: "Stroke" },
};
