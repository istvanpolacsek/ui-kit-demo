import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesShop } from "./ExamplesShop";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Examples/Examples/Shop",
  component: ExamplesShop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesShop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobileView: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("main")[0]).toBeVisible();
  },
};
export const DesktopView: Story = {
  args: { ...Default.args, platform: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("main")[0]).toBeVisible();
  },
};
