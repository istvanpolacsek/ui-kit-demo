import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer2 } from "./Footer2";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Navigation/Footer 2",
  component: Footer2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Footer2>;
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
