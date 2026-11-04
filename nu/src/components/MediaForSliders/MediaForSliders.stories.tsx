import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaForSliders } from "./MediaForSliders";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "  ↳ Media/Media for Sliders",
  component: MediaForSliders,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MediaForSliders>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { device: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, device: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("img")[0]).toBeVisible();
  },
};
export const DesktopHoverRevealsImage: Story = {
  args: { ...Default.args, device: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("img")[0]);
    await expect(canvas.getAllByRole("img")[0]).toBeVisible();
  },
};
