import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroBulletpoint } from "./HeroBulletpoint";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Bulletpoints/Hero Bulletpoint",
  component: HeroBulletpoint,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroBulletpoint>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileLayout: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("listitem")[0]).toBeVisible();
  },
};
export const DesktopLayout: Story = {
  args: { ...Default.args, device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("listitem")[0]);
    await expect(canvas.getAllByRole("listitem")[0]).toBeVisible();
  },
};
