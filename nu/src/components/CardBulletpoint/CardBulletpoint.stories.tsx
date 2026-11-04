import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardBulletpoint } from "./CardBulletpoint";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Cards/Card Bulletpoint",
  component: CardBulletpoint,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardBulletpoint>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
export const DesktopView: Story = {
  args: { ...Default.args, device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("article")[0]);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
