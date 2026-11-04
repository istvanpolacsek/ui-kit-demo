import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGeneral } from "./CardGeneral";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Cards/Card General",
  component: CardGeneral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGeneral>;
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
export const DesktopHover: Story = {
  args: { ...Default.args, device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("article")[0]);
    await expect(canvas.getAllByRole("article")[0]).toBeVisible();
  },
};
