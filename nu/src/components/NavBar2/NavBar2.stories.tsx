import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavBar2 } from "./NavBar2";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Navigation/Nav Bar 2",
  component: NavBar2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavBar2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
  },
};
export const DesktopView: Story = {
  args: { ...Default.args, device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("navigation")[0]).toBeVisible();
  },
};
