import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Navigation/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("contentinfo")[0]).toBeVisible();
  },
};
export const DesktopView: Story = {
  args: { ...Default.args, device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("contentinfo")[0]).toBeVisible();
  },
};
