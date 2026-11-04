import type { Meta, StoryObj } from "@storybook/react-vite";
import { PricingCard } from "./PricingCard";
import { expect, userEvent, within } from "storybook/test";

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

export const MobileStrokeVariant: Story = {
  args: { ...Default.args, device: "Mobile", variant: "Stroke" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
    await userEvent.hover(canvas.getAllByRole("region")[0]);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
