import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesAIChat } from "./ExamplesAIChat";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Examples/Examples/AI Chat",
  component: ExamplesAIChat,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesAIChat>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobilePlatformView: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("main")[0]).toBeVisible();
  },
};
export const DesktopPlatformView: Story = {
  args: { ...Default.args, platform: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("main")[0]).toBeVisible();
  },
};
