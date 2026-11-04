import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesLandingPage } from "./ExamplesLandingPage";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Examples/Examples/Landing Page",
  component: ExamplesLandingPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesLandingPage>;
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
