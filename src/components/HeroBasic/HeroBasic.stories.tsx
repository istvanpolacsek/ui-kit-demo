import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroBasic } from "./HeroBasic";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/Hero Basic",
  component: HeroBasic,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroBasic>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobilePlatform: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
export const DesktopPlatform: Story = {
  args: { ...Default.args, platform: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
