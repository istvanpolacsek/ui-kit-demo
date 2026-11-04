import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGridImage } from "./CardGridImage";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "Sections/Card Grid Image",
  component: CardGridImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGridImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };

export const MobileLayout: Story = {
  args: { ...Default.args, platform: "Mobile" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
export const DesktopLayout: Story = {
  args: { ...Default.args, platform: "Desktop" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole("region")[0]);
    await expect(canvas.getAllByRole("region")[0]).toBeVisible();
  },
};
