import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobilePlatform: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("contentinfo")[0]).toBeVisible();
  },
};
export const DesktopPlatform: Story = {
  args: { ...Default.args, platform: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("contentinfo")[0]).toBeVisible();
  },
};
